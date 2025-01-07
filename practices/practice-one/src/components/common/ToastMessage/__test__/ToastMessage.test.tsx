import { render, screen, act } from '@testing-library/react';

// Constants
import { STATUS_TYPES } from '@/constants';

// Components
import { Toast } from '@/components';

jest.useFakeTimers();

describe('Toast Component', () => {
  const defaultProps = {
    onClose: jest.fn(),
    children: 'Test Toast Message',
    timeoutDuration: 5000,
    type: STATUS_TYPES.SUCCESS,
  };

  const renderToast = (props?: Partial<React.ComponentProps<typeof Toast>>) =>
    render(<Toast {...defaultProps} {...props} />);

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it('matches the snapshot for success type', () => {
    const { container } = renderToast();
    expect(container).toMatchSnapshot();
  });

  it('matches the snapshot for error type', () => {
    const { container } = renderToast({ type: STATUS_TYPES.ERROR });
    expect(container).toMatchSnapshot();
  });

  it('renders the toast with the correct aria-label and message', () => {
    renderToast();

    const successToast = screen.getByLabelText('toast success');
    expect(successToast).toBeInTheDocument();
    expect(successToast).toHaveTextContent('Test Toast Message');

    renderToast({ type: STATUS_TYPES.ERROR });
    const errorToast = screen.getByLabelText('toast error');
    expect(errorToast).toBeInTheDocument();
    expect(errorToast).toHaveTextContent('Test Toast Message');
  });

  it('calls onClose after the specified timeout duration', () => {
    renderToast();

    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose before the timeout duration', () => {
    renderToast();

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(defaultProps.onClose).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('uses the default onClose function without errors when no custom onClose is provided', () => {
    render(
      <Toast timeoutDuration={3000} type={STATUS_TYPES.SUCCESS}>
        Test Default onClose
      </Toast>,
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const toast = screen.getByLabelText('toast success');
    expect(toast).toBeInTheDocument();
  });
});
