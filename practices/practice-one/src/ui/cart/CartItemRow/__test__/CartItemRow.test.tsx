import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';

// Actions
import { handleUpdateProductInCart } from '@/actions';

// UI
import { CartItemRow } from '@/ui';

// Mocks
import { CART_DATA } from '@/mocks';

jest.mock('@/actions', () => ({
  handleDeleteProductFromCart: jest.fn(),
  handleUpdateProductInCart: jest.fn(),
}));

jest.mock('@/stores', () => ({
  ToastStore: jest.fn(() => ({
    showToast: jest.fn(),
  })),
}));

describe('CartItemRow', () => {
  const mockProps = CART_DATA[0];

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <table>
        <tbody>
          <CartItemRow {...mockProps} />
        </tbody>
      </table>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should revert optimistic quantity on API error during quantity update', async () => {
    (handleUpdateProductInCart as jest.Mock).mockRejectedValue(
      new Error('API error'),
    );

    render(
      <table>
        <tbody>
          <CartItemRow {...mockProps} />
        </tbody>
      </table>,
    );

    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const quantityInput = screen.getByRole('spinbutton', {
      name: /quantity input/i,
    });

    expect(quantityInput).toHaveValue(mockProps.quantity);

    fireEvent.click(decrementButton);

    expect(quantityInput).toHaveValue(mockProps.quantity - 1);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(handleUpdateProductInCart).toHaveBeenCalledWith({
        userId: expect.any(Number),
        productId: mockProps.id,
        newQuantity: mockProps.quantity - 1,
      });
    });

    expect(quantityInput).toHaveValue(2);
  });
});
