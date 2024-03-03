import { ImgHTMLAttributes } from 'react';

export enum ICON_SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface PropTypes extends ImgHTMLAttributes<HTMLImageElement> {
  size?: ICON_SIZE;
}

export interface StylingProps {
  size: ICON_SIZE;
}
