import * as React from 'react';
import type { SVGProps } from 'react';

export const CartIcon = ({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 32 32" // Maintain the original viewBox for correct scaling
  >
    <path
      fill="#22262A"
      stroke="#22262A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={size / 12} // Adjust strokeWidth proportionally
      d="M13.696 30.05c.447 0 .81-.354.81-.79a.801.801 0 0 0-.81-.792.801.801 0 0 0-.81.791c0 .438.362.792.81.792ZM25.042 30.05c.447 0 .81-.354.81-.79a.801.801 0 0 0-.81-.792.801.801 0 0 0-.81.791c0 .438.362.792.81.792Z"
    />
    <path
      stroke="#22262A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={size / 12} // Adjust strokeWidth proportionally
      d="M4.781 4.729h3.242l3.242 18.991h16.208l3.242-14.243H9.644"
    />
  </svg>
);
