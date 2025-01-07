import { render, screen, fireEvent } from '@testing-library/react';
import { useSearchParams, useRouter } from 'next/navigation';

// UI
import { FilterSortBar } from '@/ui';

// Constants
import { SORT_PRODUCT_OPTIONS } from '@/constants';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

const mockUseSearchParams = useSearchParams as jest.Mock;
const mockUseRouter = useRouter as jest.Mock;

const setupMocks = (searchParams = new URLSearchParams(), push = jest.fn()) => {
  mockUseSearchParams.mockReturnValue(searchParams);
  mockUseRouter.mockReturnValue({ push });

  return { push };
};

const renderFilterSortBar = (props = {}) => {
  const defaultProps = {
    itemCount: 10,
    sortOptions: SORT_PRODUCT_OPTIONS,
    showOptions: ['6', '12', '24'],
    ...props,
  };

  return render(<FilterSortBar {...defaultProps} />);
};

describe('FilterSortBar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    setupMocks();
    const { asFragment } = renderFilterSortBar();

    expect(screen.getByText('10 Items')).toBeInTheDocument();
    expect(screen.getByText('Sort')).toBeInTheDocument();
    expect(screen.getByText('Show')).toBeInTheDocument();
    SORT_PRODUCT_OPTIONS.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('handles empty sort and show options gracefully', () => {
    setupMocks();
    renderFilterSortBar({ itemCount: 0, sortOptions: [], showOptions: [] });

    expect(screen.getByText('0 Items')).toBeInTheDocument();
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('calls updateQueryParams when sort option changes', () => {
    const { push } = setupMocks(new URLSearchParams());

    renderFilterSortBar();

    const sortSelect = screen.getByText('Sort')
      .nextSibling as HTMLSelectElement;
    fireEvent.change(sortSelect, {
      target: { value: SORT_PRODUCT_OPTIONS[1] },
    });

    expect(push).toHaveBeenCalledWith(`?sortBy=${SORT_PRODUCT_OPTIONS[1]}`);
  });

  it('calls updateQueryParams when show option changes', () => {
    const { push } = setupMocks(new URLSearchParams());

    renderFilterSortBar();

    const showSelect = screen.getByText('Show')
      .nextSibling as HTMLSelectElement;
    fireEvent.change(showSelect, { target: { value: '12' } });

    expect(push).toHaveBeenCalledWith('?limit=12');
  });

  it('resets pagination when show option changes', () => {
    const initialParams = new URLSearchParams({ page: '2' });
    const { push } = setupMocks(initialParams);

    renderFilterSortBar();

    const showSelect = screen.getByText('Show')
      .nextSibling as HTMLSelectElement;
    fireEvent.change(showSelect, { target: { value: '24' } });

    expect(push).toHaveBeenCalledWith('?limit=24');
    expect(push).not.toHaveBeenCalledWith(expect.stringContaining('page=2'));
  });
});
