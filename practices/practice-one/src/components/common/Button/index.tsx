// Libraries
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

// Types
import type { ButtonHTMLAttributes, ReactNode } from 'react';

// Enums
import { VARIANTS, COLORS } from '@/enums';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: VARIANTS;
  color?: COLORS;
  customClass?: string;
}

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
  variant = VARIANTS.SOLID,
  color = COLORS.DEFAULT,
  customClass = '',
  ...rest
}: IButtonProps): JSX.Element => {
  const baseClass = 'flex items-center rounded p-2';

  const variantClasses: Record<VARIANTS, string> = {
    [VARIANTS.SOLID]: 'bg-opacity-100 shadow-md',
    [VARIANTS.SHADOW]: 'shadow-lg bg-white hover:shadow-xl',
    [VARIANTS.LIGHT]: 'bg-gray-100 bg-opacity-50 hover:bg-opacity-70',
  };

  const colorClasses: Record<COLORS, string> = {
    [COLORS.DEFAULT]:
      'bg-gray-200 text-black hover:bg-gray-300 disabled:bg-gray-100',
    [COLORS.PRIMARY]:
      'bg-primary-300 text-white hover:bg-primary-400 disabled:bg-primary-100',
    [COLORS.SECONDARY]:
      'bg-gray-400 text-white hover:bg-gray-500 disabled:bg-gray-300',
    [COLORS.SUCCESS]:
      'bg-green-600 text-white hover:bg-green-700 disabled:bg-green-400',
    [COLORS.WARNING]:
      'bg-amber-400 text-black hover:bg-amber-500 disabled:bg-amber-300',
    [COLORS.DANGER]:
      'bg-rose-500 text-white hover:bg-rose-600 disabled:bg-rose-300',
  };

  const combinedClasses = twMerge(
    classNames(baseClass, variantClasses[variant], colorClasses[color]),
    customClass,
  );

  return (
    <button type={type} className={combinedClasses} {...rest}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default memo(Button);
