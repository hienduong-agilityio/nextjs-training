import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname, useSearchParams } from 'next/navigation';

// UI
import { CategoryGroup } from '@/ui';

// Mocks
import { HOT_DEALS } from '@/mocks';

// Constant
import { ALL_CATEGORIES } from '@/constants';

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

const mockTitle = 'Categories';

const setupMocks = ({
  pathname = '/products',
  searchParams = new URLSearchParams(),
  optimisticCategory = ALL_CATEGORIES.ALL,
  setOptimisticCategory = jest.fn(),
} = {}) => {
  mockUsePathname.mockReturnValue(pathname);
  mockUseSearchParams.mockReturnValue(searchParams);
  mockUseOptimistic.mockReturnValue([
    optimisticCategory,
    setOptimisticCategory,
  ]);

  return setOptimisticCategory;
};

const renderComponent = (items = HOT_DEALS) =>
  render(<CategoryGroup title={mockTitle} items={items} />);

const getCategoryElement = (category: string) =>
  screen.getByText(
    (_, element) =>
      element?.tagName.toLowerCase() === 'a' &&
      element.textContent?.toLowerCase() === category.toLowerCase(),
  );

const expectCategoryStyles = (category: string, isActive: boolean) => {
  const categoryElement = getCategoryElement(category);
  const activeClass = 'text-primary-200 bg-secondary-300';
  isActive
    ? expect(categoryElement).toHaveClass(activeClass)
    : expect(categoryElement).not.toHaveClass(activeClass);
};

describe('CategoryGroup Component', () => {
  beforeEach(() => jest.clearAllMocks());

  it('renders correctly with title and category list', () => {
    setupMocks();
    const { container } = renderComponent();

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    HOT_DEALS.forEach(({ name }) => {
      expect(getCategoryElement(name)).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });

  it('applies correct styles for active and inactive categories', () => {
    setupMocks({
      searchParams: new URLSearchParams(`category=${ALL_CATEGORIES.FURNITURE}`),
      optimisticCategory: ALL_CATEGORIES.FURNITURE,
    });
    const { container } = renderComponent();

    expectCategoryStyles(ALL_CATEGORIES.FURNITURE, true);
    expectCategoryStyles(ALL_CATEGORIES.BEAUTY, false);
    expectCategoryStyles(ALL_CATEGORIES.ALL, false);

    expect(container).toMatchSnapshot();
  });

  it('updates the URL with query parameters on category click', () => {
    const mockSetOptimisticCategory = setupMocks();
    const { container } = renderComponent();

    fireEvent.click(getCategoryElement(ALL_CATEGORIES.BEAUTY));
    expect(mockSetOptimisticCategory).toHaveBeenCalledWith(
      ALL_CATEGORIES.BEAUTY,
    );

    expect(container).toMatchSnapshot();
  });

  it('handles the ALL category properly when no category is selected', () => {
    setupMocks();
    const { container } = renderComponent();

    expectCategoryStyles(ALL_CATEGORIES.ALL, true);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with an empty items array', () => {
    setupMocks();
    const { container } = renderComponent([]);

    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
