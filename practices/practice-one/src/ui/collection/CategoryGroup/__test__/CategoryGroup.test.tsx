import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { CategoryGroup } from '@/ui';

// Mock React hooks
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useOptimistic: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

const mockUsePathname = usePathname as jest.Mock;
const mockUseSearchParams = useSearchParams as jest.Mock;
const mockUseOptimistic = jest.requireMock('react').useOptimistic;

// Mock data
const mockTitle = 'Categories';
const mockItems = [
  { name: 'All', count: 10 },
  { name: 'Bags', count: 5 },
  { name: 'Sneakers', count: 8 },
];

const setupMocks = (
  pathname = '/products',
  searchParams = new URLSearchParams(),
  optimisticCategory = 'All',
  setOptimisticCategory = jest.fn(),
) => {
  mockUsePathname.mockReturnValue(pathname);
  mockUseSearchParams.mockReturnValue(searchParams);
  mockUseOptimistic.mockReturnValue([
    optimisticCategory,
    setOptimisticCategory,
  ]);
  return setOptimisticCategory;
};

const renderComponent = (items = mockItems) => {
  render(<CategoryGroup title={mockTitle} items={items} />);
};

const expectCategoryStyles = (category: string, isActive: boolean) => {
  const categoryElement = screen.getByText(category);
  const activeClass = 'text-primary-200 bg-secondary-300';

  if (isActive) {
    expect(categoryElement).toHaveClass(activeClass);
  } else {
    expect(categoryElement).not.toHaveClass(activeClass);
  }
};

describe('CategoryGroup Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with title and category list', () => {
    setupMocks();
    renderComponent();

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    mockItems.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('applies correct styles for active and inactive categories', () => {
    setupMocks('/products', new URLSearchParams('category=Bags'), 'Bags');
    renderComponent();

    expectCategoryStyles('Bags', true);
    expectCategoryStyles('Sneakers', false);
    expectCategoryStyles('All', false);
  });

  it('updates the URL with query parameters on category click', () => {
    const mockSetOptimisticCategory = setupMocks();
    renderComponent();

    fireEvent.click(screen.getByText('Bags'));
    expect(mockSetOptimisticCategory).toHaveBeenCalledWith('Bags');
  });

  it('handles the ALL category properly when no category is selected', () => {
    setupMocks();
    renderComponent();

    expectCategoryStyles('All', true);
  });

  it('renders correctly with an empty items array', () => {
    setupMocks();
    renderComponent([]);

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
