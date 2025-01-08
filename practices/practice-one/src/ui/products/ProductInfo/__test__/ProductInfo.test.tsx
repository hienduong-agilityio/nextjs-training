import { render, screen } from '@testing-library/react';

// Types
import type { IProductProps } from '@/interfaces';

// UI
import { ProductInfo } from '@/ui';

// Mocks
import { PRODUCTS_DATA } from '@/mocks';

describe('ProductInfo Component', () => {
  const product = PRODUCTS_DATA[0];

  const renderProductInfo = (props: IProductProps = product) => {
    return render(<ProductInfo {...props} />);
  };

  it('matches the snapshot', () => {
    const { asFragment } = renderProductInfo();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with product data from PRODUCTS_DATA', () => {
    renderProductInfo();

    expect(screen.getByText(product.name)).toBeInTheDocument();

    if (product.availabilityStatus) {
      expect(screen.getByText('Availability:')).toBeInTheDocument();
      expect(screen.getByText(product.availabilityStatus)).toBeInTheDocument();
    }

    if (product.category) {
      expect(screen.getByText('Category:')).toBeInTheDocument();
      expect(screen.getByText(product.category)).toBeInTheDocument();
    }

    if (product.shippingInformation) {
      expect(screen.getByText(product.shippingInformation)).toBeInTheDocument();
    }

    const reviewLink = screen.getByText('Submit a review');
    expect(reviewLink).toBeInTheDocument();
    expect(reviewLink).toHaveAttribute('href', '/products');
  });
});
