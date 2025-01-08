// Libraries
import React from 'react';
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react';

// Components
import { ProductCard } from '@/components';
import { IProductProps } from '@/interfaces';

let defaultProps: IProductProps;
let renderResult: RenderResult;

describe('ProductCard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    defaultProps = {
      id: '1',
      name: 'Test Product',
      images: ['/test-image.jpg'],
      price: 50,
      originalPrice: 70,
      discount: '28% OFF',
      label: 'Hot',
      rating: 4,
    };

    renderResult = render(<ProductCard {...defaultProps} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the ProductCard component with default props', () => {
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$50')).toBeInTheDocument();
    expect(screen.getByText('$70')).toBeInTheDocument();
    expect(screen.getByText('Hot')).toBeInTheDocument();

    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();

    const rating = screen.getAllByRole('img', { hidden: true });
    expect(rating).toHaveLength(1);
  });

  it('renders hover buttons (Add to Cart and Favorite) on hover', () => {
    const container = screen.getByAltText('Test Product').closest('div');

    fireEvent.mouseOver(container!);

    expect(screen.getByRole('button', { name: /Add to Cart/i })).toBeVisible();
    expect(
      screen.getByRole('button', { name: /Favorite product/i }),
    ).toBeVisible();
  });

  it('renders without optional props', () => {
    renderResult.rerender(
      <ProductCard
        id="2"
        name="Minimal Product"
        images={['/minimal-image.jpg']}
        price={0}
        originalPrice={0}
      />,
    );

    expect(screen.getByText('Minimal Product')).toBeInTheDocument();
    expect(screen.queryByText('70')).not.toBeInTheDocument();
    expect(screen.queryByText('28% OFF')).not.toBeInTheDocument();
    expect(screen.getByText('Hot')).toBeInTheDocument();
  });
});
