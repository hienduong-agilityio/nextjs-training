'use client';

// Libraries
import { useState, useEffect, memo } from 'react';
import classNames from 'classnames';

// Icons
import { ErrorIcon, SuccessIcon } from '@/icons';

export interface IToastProps {
  onClose: () => void;
  children: React.ReactNode;
  timeoutDuration?: number;
  type?: 'success' | 'danger' | 'warning';
}

/**
 * Toast component
 *
 * @returns {JSX.Element | null} - Toast message element or null if not visible
 */
const Toast = ({
  onClose = () => {},
  children,
  timeoutDuration = 5000,
  type = 'success',
}: IToastProps): JSX.Element | null => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, timeoutDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose, timeoutDuration]);

  const containerClass = classNames(
    'flex items-center divide-x rtl:divide-x-reverse p-4 w-full rounded-lg shadow',
    {
      'text-white bg-success divide-green-950': type === 'success',
      'text-red-100 bg-red-800 divide-red-950': type === 'danger',
    },
  );

  const toastIcon = type === 'success' ? <SuccessIcon /> : <ErrorIcon />;

  return isVisible ? (
    <div className={containerClass}>
      <div className="text-sm font-normal inline-flex items-center gap-3 pl-1">
        {toastIcon}
        {children}
      </div>
    </div>
  ) : null;
};

export default memo(Toast);
