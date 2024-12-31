import { useRef, useCallback } from 'react';

/**
 * A type-safe debounced callback hook.
 * @param callback - The function to debounce.
 * @param delay - The debounce delay in milliseconds.
 */
export const useDebouncedCallback = <
  T extends (...args: Parameters<T>) => void,
>(
  callback: T,
  delay: number,
) => {
  const timeoutRef = useRef<number | null>(null);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
};
