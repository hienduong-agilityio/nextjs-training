import { render, screen, fireEvent } from '@testing-library/react';

// UI
import { QuantityControl } from '@/ui';

describe('QuantityControl Component', () => {
  const renderQuantityControl = (props = {}) => {
    return render(
      <QuantityControl initialQuantity={1} maxQuantity={10} {...props} />,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches the snapshots', () => {
    const { asFragment } = renderQuantityControl();
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with default props', () => {
    renderQuantityControl();

    const input = screen.getByRole('spinbutton');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(1);

    const decrementButton = screen.getByText('-');
    const incrementButton = screen.getByText('+');

    expect(decrementButton).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
  });

  it('increments the quantity when increment button is clicked', () => {
    const onQuantityChange = jest.fn();
    renderQuantityControl({ onQuantityChange });

    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveValue(2);
    expect(onQuantityChange).toHaveBeenCalledWith(2);
  });

  it('decrements the quantity when decrement button is clicked', () => {
    const onQuantityChange = jest.fn();
    renderQuantityControl({ initialQuantity: 2, onQuantityChange });

    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveValue(1);
    expect(onQuantityChange).toHaveBeenCalledWith(1);
  });

  it('disables decrement button when quantity is at minimum', () => {
    renderQuantityControl({ initialQuantity: 1 });

    const decrementButton = screen.getByText('-');
    expect(decrementButton).toBeDisabled();
  });

  it('disables increment button when quantity is at maximum', () => {
    renderQuantityControl({ initialQuantity: 10, maxQuantity: 10 });

    const incrementButton = screen.getByText('+');
    expect(incrementButton).toBeDisabled();
  });

  it('clamps the quantity to max value when input exceeds max quantity', () => {
    const onQuantityChange = jest.fn();
    renderQuantityControl({ maxQuantity: 10, onQuantityChange });

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '15' } });
    fireEvent.blur(input);

    expect(input).toHaveValue(10);
    expect(onQuantityChange).toHaveBeenCalledWith(10);
  });

  it('clamps the quantity to minimum value when input is below 1', () => {
    const onQuantityChange = jest.fn();
    renderQuantityControl({ onQuantityChange });

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '-3' } });
    fireEvent.blur(input);

    expect(input).toHaveValue(1);
    expect(onQuantityChange).toHaveBeenCalledWith(1);
  });

  it('disables all controls when isLoading is true', () => {
    renderQuantityControl({ isLoading: true });

    const decrementButton = screen.getByText('-');
    const input = screen.getByRole('spinbutton');

    expect(decrementButton).toBeDisabled();
    expect(input).toBeDisabled();
  });
});
