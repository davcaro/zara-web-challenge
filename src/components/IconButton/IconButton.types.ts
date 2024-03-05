import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, MouseEvent, SVGProps } from 'react';

export enum ICON_SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export type PropTypes = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  size?: ICON_SIZE;
};
