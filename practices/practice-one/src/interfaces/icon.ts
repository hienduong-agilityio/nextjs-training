import { SVGProps } from 'react';

export interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  itemCount?: number;
  isStarred?: boolean;
  rating?: number;
}
