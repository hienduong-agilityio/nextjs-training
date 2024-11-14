import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none">
    <path
      stroke="#40BFFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M27.906 34.516V23.5L41.125 5.875H5.875L19.094 23.5v17.625"
    />
  </svg>
);

export default SvgComponent;
