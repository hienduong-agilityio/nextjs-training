import type { IIconProps } from '@/interfaces';
import * as React from 'react';

export const MessageIcon = ({ size = 60, ...props }: IIconProps) => {
  const scale = size / 72;

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 72 72"
    >
      <path
        fill="#9098B1"
        fillRule="evenodd"
        clipRule="evenodd"
        d={`M${7.333 * scale} ${19.25 * scale}A${3.667 * scale} ${3.667 * scale} 0 0 1 ${
          11 * scale
        } ${15.583 * scale}h${66 * scale}a${3.667 * scale} ${3.667 * scale} 0 0 1 ${
          3.667 * scale
        } ${3.667 * scale}v${49.5 * scale}A${3.667 * scale} ${3.667 * scale} 0 0 1 ${
          77 * scale
        } ${72.417 * scale}H${11 * scale}a${3.667 * scale} ${3.667 * scale} 0 0 1 -${
          3.667 * scale
        } -${3.667 * scale}v-${49.5 * scale}Zm${7.334 * scale} ${3.667 * scale}v${
          42.166 * scale
        }h${58.666 * scale}V${22.917 * scale}H${14.668 * scale}Z`}
      />
      <path
        fill="#9098B1"
        fillRule="evenodd"
        clipRule="evenodd"
        d={`M${8.216 * scale} ${16.864 * scale}a${3.667 * scale} ${3.667 * scale} 0 0 1 ${
          5.17 * scale
        } -${0.398 * scale}L${44 * scale} ${42.706 * scale}l${30.614 * scale} -${
          26.24 * scale
        }a${3.667 * scale} ${3.667 * scale} 0 0 1 ${4.772 * scale} ${5.568 * scale}l-${
          33 * scale
        } ${28.285 * scale}a${3.667 * scale} ${3.667 * scale} 0 0 1 -${4.772 * scale} 0l-${
          33 * scale
        } -${28.285 * scale}a${3.667 * scale} ${3.667 * scale} 0 0 1 -${0.398 * scale} -${
          5.17 * scale
        }Z`}
      />
    </svg>
  );
};
