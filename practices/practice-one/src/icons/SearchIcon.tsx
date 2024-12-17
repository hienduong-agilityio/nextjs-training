import type { IIconProps } from '@/interfaces';
import * as React from 'react';

export const SearchIcon = ({
  size = 20,
  color = '#9098B1',
  ...props
}: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M8.875 16.75C13.2242 16.75 16.75 13.2242 16.75 8.875C16.75 4.52576 13.2242 1 8.875 1C4.52576 1 1 4.52576 1 8.875C1 13.2242 4.52576 16.75 8.875 16.75Z"
      stroke={color}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M14.5 14.5L19 19"
      stroke={color}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);
