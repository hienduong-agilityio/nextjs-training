import { render, screen } from '@testing-library/react';

// UI
import {
  LoadingProductCard,
  LoadingProductTabs,
  LoadingRelatedProducts,
} from '@/ui';

describe('Loading Components', () => {
  it('renders LoadingProductCard and matches snapshot', () => {
    const { asFragment } = render(<LoadingProductCard />);
    expect(screen.getByLabelText('Loading Product Card')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders LoadingProductTabs and matches snapshot', () => {
    const { asFragment } = render(<LoadingProductTabs />);
    expect(screen.getByLabelText('Loading Product Tabs')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders LoadingRelatedProducts with four LoadingProductCard components and matches snapshot', () => {
    const { asFragment } = render(<LoadingRelatedProducts />);
    expect(
      screen.getByLabelText('Loading Related Products'),
    ).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
