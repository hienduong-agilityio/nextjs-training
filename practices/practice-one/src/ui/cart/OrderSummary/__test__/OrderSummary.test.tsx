import { render, screen, fireEvent, act } from '@testing-library/react';
import { useRouter } from 'next/navigation';

// Actions
import { handleClearProductFromCart } from '@/actions';

// UI
import { OrderSummary, IOrderSummaryProps } from '@/ui';

// Mock dependencies
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/actions', () => ({
  handleClearProductFromCart: jest.fn(),
}));

jest.mock('react', () => {
  const actualReact = jest.requireActual('react');
  return {
    ...actualReact,
    useOptimistic: jest.fn((initialState) => {
      let state = initialState;
      const setState = jest.fn((newValues) => {
        state = { ...state, ...newValues };
      });
      return [state, setState];
    }),
  };
});

describe('OrderSummary Component', () => {
  const mockRouterPush = jest.fn();
  const DEFAULT_SUMMARY: IOrderSummaryProps = {
    subtotal: 100,
    shippingFee: 10,
    couponValue: 20,
    total: 90,
  };

  // Utility to render OrderSummary with default or custom summary
  const renderOrderSummary = (summary: IOrderSummaryProps = DEFAULT_SUMMARY) =>
    render(<OrderSummary summary={summary} />);

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });
  });

  it('renders correctly with default props', () => {
    renderOrderSummary();

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument();
    expect(screen.getByText('Shipping fee')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByText('Coupon')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('$90.00')).toBeInTheDocument();
  });

  it('disables the "Check out" button when subtotal is zero', () => {
    renderOrderSummary({
      subtotal: 0,
      shippingFee: 10,
      couponValue: null,
      total: 10,
    });

    const button = screen.getByRole('button', { name: /Check out/i });
    expect(button).toBeDisabled();
  });

  it.each([
    [true, 'success'],
    [false, 'error'],
  ])(
    'calls handleClearProductFromCart and navigates to the correct status on checkout (success: %s)',
    async (actionResolvedValue, expectedStatus) => {
      (handleClearProductFromCart as jest.Mock).mockResolvedValue(
        actionResolvedValue,
      );

      renderOrderSummary();
      const button = screen.getByRole('button', { name: /Check out/i });

      await act(async () => {
        fireEvent.click(button);
      });

      expect(handleClearProductFromCart).toHaveBeenCalledWith(
        expect.any(Number),
      );
      expect(mockRouterPush).toHaveBeenCalledWith(
        expect.stringContaining(`status=${expectedStatus}`),
      );
    },
  );
});
