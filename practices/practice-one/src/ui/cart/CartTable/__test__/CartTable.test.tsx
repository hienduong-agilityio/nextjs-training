import { render, screen } from '@testing-library/react';

// Types
import type { ICartItem } from '@/interfaces';

// UI
import { CartTable } from '../index';

jest.mock('@/ui', () => ({
  EmptyCart: jest.fn(() => <div data-testid="empty-cart">Empty Cart</div>),
  CartItemRow: jest.fn(({ id }) => (
    <tr data-testid="cart-item-row">
      <td>{id}</td>
    </tr>
  )),
}));

const mockProducts: ICartItem[] = [
  {
    id: '1',
    thumbnail: '/images/product1.png',
    title: 'Product 1',
    price: 100,
    quantity: 2,
    total: 200,
    discountPercentage: 10,
    discountedTotal: 180,
  },
  {
    id: '2',
    thumbnail: '/images/product2.png',
    title: 'Product 2',
    price: 50,
    quantity: 1,
    total: 50,
  },
];

describe('CartTable', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderCartTable = (products: ICartItem[]) => {
    render(<CartTable products={products} />);
  };

  const cartTableHeaders = ['Product', 'Price', 'Qty', 'Unit Price'];

  it('renders the empty cart state when products are empty', () => {
    renderCartTable([]);
    expect(screen.getByTestId('empty-cart')).toBeInTheDocument();
  });

  it('renders the cart table headers correctly', () => {
    renderCartTable(mockProducts);

    cartTableHeaders.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it('renders CartItemRow for each product', () => {
    renderCartTable(mockProducts);

    const cartItemRows = screen.getAllByTestId('cart-item-row');
    expect(cartItemRows).toHaveLength(mockProducts.length);

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.id)).toBeInTheDocument();
    });
  });

  it('renders the table structure correctly', () => {
    renderCartTable(mockProducts);

    expect(
      screen.getByRole('table', { name: 'Cart table' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('rowgroup', { name: 'Cart table headers' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('rowgroup', { name: 'Cart table body' }),
    ).toBeInTheDocument();

    const headerCells = screen.getAllByRole('columnheader');
    expect(headerCells).toHaveLength(cartTableHeaders.length);
    expect(headerCells.map((cell) => cell.textContent)).toEqual(
      cartTableHeaders,
    );
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<CartTable products={mockProducts} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
