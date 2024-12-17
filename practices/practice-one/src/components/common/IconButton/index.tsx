'use client';

// Libraries
import { twMerge } from 'tailwind-merge';

// Enums
import { BUTTON_VARIANTS } from '@/enums';

// Components
import { Button } from '@/components';

// Types
import type { IButtonProps } from '../Button';

// Tailwind CSS
const baseStyles =
  'flex items-center justify-center p-2 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-offset-2';

const IconButton = ({ children, customClass, ...props }: IButtonProps) => {
  return (
    <Button
      variant={BUTTON_VARIANTS.SOLID}
      customClass={twMerge(baseStyles, customClass)}
      {...props}
    >
      {children}
    </Button>
  );
};

export default IconButton;
