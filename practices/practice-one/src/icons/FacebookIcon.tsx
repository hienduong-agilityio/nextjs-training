import * as React from 'react';
import { SVGProps } from 'react';

export const FacebookIcon = ({
  size = 72,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) => {
  const scale = size / 72;

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 48 88"
    >
      <path
        fill="#4092FF"
        d="M48 0H34.91A21.727 21.727 0 0 0 19.48 6.444 22.093 22.093 0 0 0 13.091 22v13.2H0v17.6h13.09V88h17.456V52.8h13.09L48 35.2H30.546V22c0-1.167.46-2.286 1.277-3.111A4.346 4.346 0 0 1 34.91 17.6H48V0Z"
        transform={`scale(${scale})`}
      />
    </svg>
  );
};
