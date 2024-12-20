// Libraries
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

// Types
import type { ButtonHTMLAttributes, ReactNode } from 'react';

// Enums
import { BUTTON_VARIANTS, BUTTON_COLORS } from '@/enums';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: BUTTON_VARIANTS;
  color?: BUTTON_COLORS;
  customClass?: string;
}

const baseClass =
  'flex justify-center gap-2 rounded p-2 disabled:cursor-not-allowed disabled:opacity-50';

const variantClasses: Record<BUTTON_VARIANTS, string> = {
  [BUTTON_VARIANTS.SOLID]: 'bg-opacity-100 shadow-md',
  [BUTTON_VARIANTS.SHADOW]: 'shadow-lg bg-white hover:shadow-xl',
  [BUTTON_VARIANTS.LIGHT]: 'bg-gray-100 bg-opacity-50 hover:bg-opacity-70',
};

const colorClasses: Record<BUTTON_COLORS, string> = {
  [BUTTON_COLORS.DEFAULT]: 'bg-gray-200 text-black hover:bg-gray-300',
  [BUTTON_COLORS.PRIMARY]: 'bg-primary-300 text-white hover:bg-primary-400',
  [BUTTON_COLORS.SECONDARY]: 'bg-gray-400 text-white hover:bg-gray-500',
  [BUTTON_COLORS.SUCCESS]: 'bg-green-600 text-white hover:bg-green-700',
  [BUTTON_COLORS.WARNING]: 'bg-amber-400 text-black hover:bg-amber-500',
  [BUTTON_COLORS.DANGER]: 'bg-rose-500 text-white hover:bg-rose-600',
};

/**
 * Button component
 *
 * @returns {JSX.Element} - The rendered button element.
 */
const Button = ({
  children,
  startIcon = '',
  endIcon = '',
  type = 'button',
  variant = BUTTON_VARIANTS.SOLID,
  color = BUTTON_COLORS.DEFAULT,
  customClass = '',
  ...rest
}: IButtonProps): JSX.Element => {
  const combinedClasses = twMerge(
    classNames(baseClass, variantClasses[variant], colorClasses[color]),
    customClass,
  );

  return (
    <button type={type} className={combinedClasses} {...rest}>
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default memo(Button);
