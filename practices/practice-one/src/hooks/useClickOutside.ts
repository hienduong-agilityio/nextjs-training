// useClickOutside.ts
import { useEffect, RefObject } from 'react';

/**
 * Custom hook to handle clicks outside of a referenced element.
 * @param ref - A React ref object pointing to the target element.
 * @param onOutsideClick - Callback function to execute when a click outside the target element occurs.
 * @param isActive - Boolean to determine whether the click listener is active.
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  onOutsideClick: () => void,
  isActive: boolean,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, onOutsideClick, isActive]);
};
