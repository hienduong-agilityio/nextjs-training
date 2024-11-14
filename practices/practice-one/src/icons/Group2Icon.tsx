import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="#33A0FF" d="M44.274 15.75H0v10.5h44.274v-10.5Z" />
    <path fill="#33A0FF" d="M27.672 42V0H16.604v42h11.068Z" />
  </svg>
);
export default SvgComponent;
