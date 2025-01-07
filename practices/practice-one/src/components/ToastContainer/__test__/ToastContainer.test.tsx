import { act, render, screen, waitFor, cleanup } from '@testing-library/react';

// Stores
import { ToastStore } from '@/stores';

// Components
import { ToastContainer } from '@/components';

// Constants
import { STATUS_TYPES, TOAST_MESSAGES } from '@/constants';

describe('ToastContainer and ToastStore', () => {
  const DEFAULT_MESSAGE = TOAST_MESSAGES.API_ERROR;

  const setupToast = (
    message: string,
    type: string,
    timeoutDuration: number = 3000,
  ) => {
    act(() => {
      ToastStore.getState().showToast(message, type, timeoutDuration);
    });
    return render(<ToastContainer />);
  };

  afterEach(() => {
    cleanup();
    act(() => {
      ToastStore.setState({
        message: '',
        type: STATUS_TYPES.SUCCESS,
        isVisible: false,
        timeoutDuration: 3000,
      });
    });
  });

  it('should render the Toast when `isVisible` is true', async () => {
    const message = 'This is a success message';
    const { asFragment } = setupToast(message, STATUS_TYPES.SUCCESS);

    const toastElement = screen.getByLabelText('toast success');
    expect(toastElement).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should hide the Toast after the specified timeout duration', async () => {
    const message = 'This toast will disappear';
    const timeoutDuration = 1000;

    const { asFragment } = setupToast(
      message,
      STATUS_TYPES.SUCCESS,
      timeoutDuration,
    );

    expect(screen.getByText(message)).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();

    await waitFor(
      () => {
        expect(screen.queryByText(message)).not.toBeInTheDocument();
      },
      { timeout: timeoutDuration + 500 },
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display different Toast types correctly', () => {
    const messages = [
      {
        message: 'Success',
        type: STATUS_TYPES.SUCCESS,
        label: 'toast success',
      },
      {
        message: 'Warning',
        type: STATUS_TYPES.WARNING,
        label: 'toast warning',
      },
      { message: 'Error', type: STATUS_TYPES.ERROR, label: 'toast error' },
    ];

    messages.forEach(({ message, type, label }) => {
      const { asFragment } = setupToast(message, type);
      const toastElements = screen.getAllByLabelText(label);

      expect(toastElements.length).toBe(1);
      expect(screen.getByText(message)).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
      cleanup();
    });
  });

  it('should reset the store when `hideToast` is called', () => {
    const { hideToast, showToast } = ToastStore.getState();

    act(() => {
      showToast(DEFAULT_MESSAGE, STATUS_TYPES.SUCCESS);
    });
    expect(ToastStore.getState().isVisible).toBe(true);

    act(() => {
      hideToast();
    });
    expect(ToastStore.getState().isVisible).toBe(false);
    expect(ToastStore.getState().message).toBe(DEFAULT_MESSAGE);
  });
});
