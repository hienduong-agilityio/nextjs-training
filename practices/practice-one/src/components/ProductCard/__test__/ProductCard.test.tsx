import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from '@testing-library/react';

// Components
import { ProductCard } from '@/components';

// Mocks
import { PRODUCTS_DATA } from '@/mocks';

// Types
import type { IProductProps } from '@/interfaces';

let renderResult: RenderResult;
let mockProduct: IProductProps;

describe('ProductCard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockProduct = { ...PRODUCTS_DATA[0] };
  });

  const renderWithProps = (product = mockProduct) => {
    renderResult = render(<ProductCard {...product} />);
  };

  it('matches snapshot', () => {
    renderWithProps();

    const { asFragment } = renderResult;
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders product details correctly', () => {
    mockProduct = { ...PRODUCTS_DATA[1] };
    renderWithProps();

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(
      screen.getByText(`$${mockProduct.originalPrice}`),
    ).toBeInTheDocument();
  });

  it('renders hover buttons on mouse over', () => {
    mockProduct = { ...PRODUCTS_DATA[3] };
    renderWithProps();

    const container = screen.getByAltText(mockProduct.name).closest('div');
    fireEvent.mouseOver(container!);

    expect(screen.getByRole('button', { name: /Add to Cart/i })).toBeVisible();
    expect(
      screen.getByRole('button', { name: /Favorite product/i }),
    ).toBeVisible();
  });

  it('renders fallback image when images array is empty', () => {
    mockProduct = { ...PRODUCTS_DATA[0], images: [] };
    renderWithProps();

    const image = screen.getByAltText(mockProduct.name);
    expect(image).toHaveAttribute('src', '/images/image-placeholder.svg');
  });
});
