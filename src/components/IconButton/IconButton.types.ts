import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react';
import { ICON_SIZE } from '@/components/Icon';

export type PropTypes = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;

  /* Icon component props */
  icon: string;
  alt?: string;
  size?: ICON_SIZE;
};
