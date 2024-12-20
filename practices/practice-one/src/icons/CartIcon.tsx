import type { IIconProps } from '@/interfaces';
import * as React from 'react';

export const CartIcon = ({
  size = 24,
  itemCount = 0,
  ...props
}: IIconProps) => {
  const showBadge = itemCount > 0;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 40 32"
    >
      {/* Cart Icon */}
      <path
        fill="#22262A"
        stroke="#22262A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={size / 12}
        d="M10 28c.447 0 .81-.354.81-.79a.801.801 0 0 0-.81-.792.801.801 0 0 0-.81.791c0 .438.362.792.81.792ZM24 28c.447 0 .81-.354.81-.79a.801.801 0 0 0-.81-.792.801.801 0 0 0-.81.791c0 .438.362.792.81.792Z"
      />
      <path
        stroke="#22262A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={size / 12}
        d="M4 4h3l3 18h16l3-14H10"
      />

      {/* Badge */}
      {showBadge && (
        <g transform="translate(20 -5)">
          <circle
            cx="8"
            cy="10"
            r="10"
            fill="#FB7181"
            stroke="white"
            strokeWidth="2"
          />
          <text
            x="8"
            y="10"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize={size / 3}
            fontWeight="bold"
          >
            {itemCount}
          </text>
        </g>
      )}
    </svg>
  );
};
