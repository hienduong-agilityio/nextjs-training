// Types
import type { IIconProps } from '@/interfaces';

export const CheckMarkIcon = ({
  size = 12,
  color = '#A9EBCA',
  ...props
}: IIconProps): JSX.Element => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.0022 12C9.31591 12 12.0022 9.31371 12.0022 6C12.0022 2.68629 9.31591 0 6.0022 0C2.68849 0 0.00219727 2.68629 0.00219727 6C0.00219727 9.31371 2.68849 12 6.0022 12ZM7.94379 3.91404C8.17067 3.67328 8.59119 3.71853 8.82444 3.91404C9.08494 4.13238 9.03673 4.49289 8.82444 4.71814L5.65234 8.08426C5.44861 8.30045 4.97439 8.30998 4.77167 8.08426L3.17782 6.30949C2.95656 6.06311 2.9311 5.75078 3.17782 5.50538C3.39002 5.29432 3.85106 5.27441 4.05848 5.50538L5.22261 6.80165L7.94379 3.91404Z"
        fill={color}
      />
    </svg>
  );
};