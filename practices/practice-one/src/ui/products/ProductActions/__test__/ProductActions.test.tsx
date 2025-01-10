import { render, screen, fireEvent } from '@testing-library/react';

// UI
import { ProductActions } from '@/ui';

describe('ProductActions Component', () => {
  const productId = 'test-product-id';
  let quantityInput: HTMLElement;
  let incrementButton: HTMLElement;
  let decrementButton: HTMLElement;

  beforeEach(() => {
    render(<ProductActions productId={productId} />);

    quantityInput = screen.getByLabelText('Quantity input');
    incrementButton = screen.getByLabelText('increment');
    decrementButton = screen.getByLabelText('decrement');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<ProductActions productId={productId} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with initial state', () => {
    expect(screen.getByLabelText('Quantity Control')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Cart and Favorite Actions'),
    ).toBeInTheDocument();
  });

  it('updates quantity when handleQuantityChange is called via QuantityControl', () => {
    fireEvent.click(incrementButton);
    expect(quantityInput).toHaveValue(2);

    fireEvent.click(decrementButton);
    expect(quantityInput).toHaveValue(1);
  });
});
