import { render, screen } from '@testing-library/react';
import { redirect } from 'next/navigation';

// Mock
import { CATEGORIES, PRODUCTS_DATA } from '@/mocks';

// Components
import { ProductTabs } from '@/components';

// Constants
import { ROUTE } from '@/constants';

// Mock Dependencies
jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}));

describe('ProductTabs Component', () => {
  const defaultProps = {
    productData: PRODUCTS_DATA,
    category: undefined,
  };

  const renderComponent = (props = {}) => {
    return render(<ProductTabs {...defaultProps} {...props} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should redirect to the products route when an invalid category is provided', () => {
    renderComponent({ category: 'invalid' });
    expect(redirect).toHaveBeenCalledWith(ROUTE.PRODUCTS);
  });

  it('should render the correct number of tabs, category header, and custom styles', () => {
    renderComponent();

    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(CATEGORIES.length);

    const tabWrapper = screen.getByRole('tablist');
    expect(tabWrapper).toHaveClass('flex flex-col w-full');

    const header = screen.getByText(/Best seller/i);
    expect(header).toBeInTheDocument();
  });
});
