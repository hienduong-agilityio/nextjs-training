import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';

import { handleUpdateProductInCart } from '@/actions';
import { CartItemRow } from '@/ui';

jest.mock('@/actions', () => ({
  handleDeleteProductFromCart: jest.fn(),
  handleUpdateProductInCart: jest.fn(),
}));

jest.mock('@/stores', () => ({
  ToastStore: jest.fn(() => ({
    showToast: jest.fn(),
  })),
}));

const mockProps = {
  id: '123',
  thumbnail: '/images/image-placeholder.svg',
  quantity: 2,
  title: 'Test Product',
  price: 50,
};

describe('CartItemRow', () => {
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
          <CartItemRow total={0} {...mockProps} />
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
          <CartItemRow total={0} {...mockProps} />
        </tbody>
      </table>,
    );

    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const quantityInput = screen.getByRole('spinbutton', {
      name: /quantity input/i,
    });

    expect(quantityInput).toHaveValue(2);

    fireEvent.click(decrementButton);

    expect(quantityInput).toHaveValue(1);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(handleUpdateProductInCart).toHaveBeenCalledWith({
        userId: expect.any(Number),
        productId: mockProps.id,
        newQuantity: 1,
      });
    });
  });
});
