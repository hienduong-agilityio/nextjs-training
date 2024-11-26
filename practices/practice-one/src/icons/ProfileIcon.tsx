import type { IIconProps } from '@/interfaces';
import * as React from 'react';

export const ProfileIcon = ({ size = 40, ...props }: IIconProps) => {
  const scale = size / 40;

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
        fill="#22262A"
        fillRule="evenodd"
        clipRule="evenodd"
        d={`M${38.712 * scale} ${32.523 * scale}A${19.712 * scale} ${
          19.712 * scale
        } 0 0 0 ${27.898 * scale} ${21.28 * scale}a${11.896 * scale} ${
          11.896 * scale
        } 0 0 0 ${4.343 * scale} -${9.092 * scale}a${12.344 * scale} ${
          12.344 * scale
        } 0 0 0 -${3.303 * scale} -${8.21 * scale}A${12.325 * scale} ${
          12.325 * scale
        } 0 0 0 ${20.99 * scale} ${0.093 * scale}c-${0.995 * scale} -${
          0.124 * scale
        } -${2.001 * scale} -${0.124 * scale} -${2.996 * scale} 0a${
          12.325 * scale
        } ${12.325 * scale} 0 0 0 -${7.94 * scale} ${3.887 * scale}a${
          12.344 * scale
        } ${12.344 * scale} 0 0 0 -${3.3 * scale} ${8.207 * scale}a${
          11.898 * scale
        } ${11.898 * scale} 0 0 0 ${4.343 * scale} ${9.092 * scale}A${
          19.691 * scale
        } ${19.691 * scale} 0 0 0 ${0.28 * scale} ${32.523 * scale}a${
          4.708 * scale
        } ${4.708 * scale} 0 0 0 ${0.66 * scale} ${4.427 * scale}A${
          5.177 * scale
        } ${5.177 * scale} 0 0 0 ${5.101 * scale} ${39 * scale}h${
          28.81 * scale
        }a${5.165 * scale} ${5.165 * scale} 0 0 0 ${4.156 * scale} -${
          2.05 * scale
        }a${4.69 * scale} ${4.69 * scale} 0 0 0 ${0.645 * scale} -${4.427 * scale}Zm-${26.86 * scale} -${
          20.336 * scale
        }a${7.423 * scale} ${7.423 * scale} 0 0 1 ${2.025 * scale} -${
          4.96 * scale
        }a${7.411 * scale} ${7.411 * scale} 0 0 1 ${4.834 * scale} -${
          2.303 * scale
        }a${6.43 * scale} ${6.43 * scale} 0 0 1 ${1.58 * scale} 0a${
          7.326 * scale
        } ${7.326 * scale} 0 0 1 ${5.935 * scale} ${5.229 * scale}a${
          7.34 * scale
        } ${7.34 * scale} 0 0 1 -${2.266 * scale} ${7.581 * scale}a${
          7.326 * scale
        } ${7.326 * scale} 0 0 1 -${12.107 * scale} -${5.547 * scale}ZM${
          5.097 * scale
        } ${34.125 * scale}a${15.532 * scale} ${15.532 * scale} 0 0 1 ${5.71 * scale} -${
          7.083 * scale
        }a${15.513 * scale} ${15.513 * scale} 0 0 1 ${23.1 * scale} ${7.083 * scale}H${
          5.097 * scale
        }Z`}
      />
    </svg>
  );
};
