import { render, screen } from '@testing-library/react';

// Types
import type { ICartItem } from '@/interfaces';

// UI
import { CartTable } from '../index';

// Mocks
import { CART_DATA } from '@/mocks';

jest.mock('@/ui', () => ({
  EmptyCart: jest.fn(() => <div data-testid="empty-cart">Empty Cart</div>),
  CartItemRow: jest.fn(({ id }) => (
    <tr data-testid="cart-item-row">
      <td>{id}</td>
    </tr>
  )),
}));

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
    renderCartTable(CART_DATA);

    cartTableHeaders.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it('renders CartItemRow for each product', () => {
    renderCartTable(CART_DATA);

    const cartItemRows = screen.getAllByTestId('cart-item-row');
    expect(cartItemRows).toHaveLength(CART_DATA.length);

    CART_DATA.forEach((product) => {
      expect(screen.getByText(product.id)).toBeInTheDocument();
    });
  });

  it('renders the table structure correctly', () => {
    renderCartTable(CART_DATA);

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
    const { asFragment } = render(<CartTable products={CART_DATA} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
