'use client';

// Libraries
import { useEffect, memo } from 'react';
import classNames from 'classnames';

// Icons
import { WarningIcon, CheckMarkIcon } from '@/icons';

// Constants
import { TOAST_TYPES } from '@/constants';

// Types
import type { ToastType } from '@/types';

export interface IToastProps {
  onClose: () => void;
  children: React.ReactNode;
  timeoutDuration?: number;
  type?: ToastType;
}

/**
 * Toast component
 *
 * @returns {JSX.Element} - Toast message element.
 */
const Toast = ({
  onClose = () => {},
  children,
  timeoutDuration = 5000,
  type = TOAST_TYPES.SUCCESS,
}: IToastProps): JSX.Element => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, timeoutDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose, timeoutDuration]);

  const containerClass = classNames(
    'flex items-center divide-x rtl:divide-x-reverse px-4 py-3 rounded-lg shadow transition-transform duration-300 w-max max-w-full',
    {
      'text-white bg-success divide-green-950': type === TOAST_TYPES.SUCCESS,
      'text-red-100 bg-red-800 divide-red-950': type === TOAST_TYPES.ERROR,
    },
  );

  const toastIcon =
    type === TOAST_TYPES.SUCCESS ? <CheckMarkIcon /> : <WarningIcon />;

  return (
    <div className={containerClass}>
      <div className="text-sm font-normal inline-flex items-center gap-3">
        {toastIcon}
        {children}
      </div>
    </div>
  );
};

export default memo(Toast);