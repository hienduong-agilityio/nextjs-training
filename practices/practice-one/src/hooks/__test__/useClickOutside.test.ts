import { renderHook, act } from '@testing-library/react';
import { RefObject } from 'react';

// Hooks
import { useClickOutside } from '@/hooks';

describe('useClickOutside', () => {
  const setupHook = (
    isActive: boolean,
    refElement: HTMLElement | null = document.createElement('div'),
  ) => {
    const ref = { current: refElement } as RefObject<HTMLElement>;
    const callback = jest.fn();

    renderHook(() => useClickOutside(ref, callback, isActive));

    return { ref, callback };
  };

  it('calls the callback when clicking outside the element and isActive is true', () => {
    const { callback } = setupHook(true);

    act(() => {
      document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
