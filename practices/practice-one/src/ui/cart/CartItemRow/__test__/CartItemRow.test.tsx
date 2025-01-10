import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';

// Actions
import {
  handleDeleteProductFromCart,
  handleUpdateProductInCart,
} from '@/actions';

// UI
import { CartItemRow } from '@/ui';

// Mocks
import { CART_DATA } from '@/mocks';

// Constants
import { STATUS_TYPES, TOAST_MESSAGES } from '@/constants';

jest.mock('@/actions', () => ({
  handleDeleteProductFromCart: jest.fn(),
  handleUpdateProductInCart: jest.fn(),
}));

jest.mock('@/stores', () => {
  const showToast = jest.fn();
  return {
    ToastStore: () => ({ showToast }),
  };
});

describe('CartItemRow', () => {
  const mockProps = CART_DATA[0];
  const { showToast } = jest.requireMock('@/stores').ToastStore();

  const renderCartItemRow = () =>
    render(
      <table>
        <tbody>
          <CartItemRow {...mockProps} />
        </tbody>
      </table>,
    );

  const testToastMessage = async (message: string, status: string) => {
    await waitFor(() => {
      expect(showToast).toHaveBeenCalledWith(
        expect.stringContaining(message),
        expect.stringContaining(status),
      );
    });
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should match snapshot', () => {
    const { container } = renderCartItemRow();
    expect(container).toMatchSnapshot();
  });

  it('should revert optimistic quantity on API error during quantity update', async () => {
    (handleUpdateProductInCart as jest.Mock).mockRejectedValue(
      new Error('API error'),
    );

    renderCartItemRow();

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

  it('should show success toast when product is removed successfully', async () => {
    (handleDeleteProductFromCart as jest.Mock).mockResolvedValue(true);

    renderCartItemRow();

    const removeButton = screen.getByLabelText('Remove product');

    fireEvent.click(removeButton);

    await waitFor(() => {
      expect(handleDeleteProductFromCart).toHaveBeenCalledWith({
        userId: expect.any(Number),
        productId: mockProps.id,
      });
    });

    await testToastMessage(TOAST_MESSAGES.DELETE_SUCCESS, STATUS_TYPES.SUCCESS);
  });

  it('should show error toast when product removal fails', async () => {
    (handleDeleteProductFromCart as jest.Mock).mockResolvedValue(false);

    renderCartItemRow();

    const removeButton = screen.getByLabelText('Remove product');

    fireEvent.click(removeButton);

    await waitFor(() => {
      expect(handleDeleteProductFromCart).toHaveBeenCalledWith({
        userId: expect.any(Number),
        productId: mockProps.id,
      });
    });

    await testToastMessage(TOAST_MESSAGES.DELETE_FAILED, STATUS_TYPES.ERROR);
  });

  it('should show API error toast when product removal throws an error', async () => {
    (handleDeleteProductFromCart as jest.Mock).mockRejectedValue(
      new Error('API error'),
    );

    renderCartItemRow();

    const removeButton = screen.getByLabelText('Remove product');

    fireEvent.click(removeButton);

    await waitFor(() => {
      expect(handleDeleteProductFromCart).toHaveBeenCalledWith({
        userId: expect.any(Number),
        productId: mockProps.id,
      });
    });

    await testToastMessage(TOAST_MESSAGES.API_ERROR, STATUS_TYPES.ERROR);
  });
});
