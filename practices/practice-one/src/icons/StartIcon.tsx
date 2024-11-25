import type { IIconProps } from '@/interfaces';
import * as React from 'react';

export const Start = ({
  size = 44,
  isStarred = false,
  ...props
}: IIconProps) => {
  const fillColor = isStarred ? '#FFC600' : '#C1C8CE';

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <path
        fill={fillColor}
        transform={`scale(${size / 44})`}
        d="M41.982 17.527 29.044 27.992 32.85 45 20.28 34.725 6.9 44.453l5.169-16.817L0 16.642l15.764-.119L21.688 0l4.574 16.746 15.72.782Z"
      />
    </svg>
  );
};
