import { renderHook, act } from '@testing-library/react';

// Hooks
import { useDebouncedCallback } from '@/hooks';

jest.useFakeTimers();

describe('useDebouncedCallback', () => {
  it('executes the callback after the specified delay', () => {
    const callback = jest.fn();
    const delay = 500;
    const { result } = renderHook(() => useDebouncedCallback(callback, delay));

    act(() => {
      result.current('test');
      jest.advanceTimersByTime(300);
      result.current('test2');
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('test2');
  });
});
