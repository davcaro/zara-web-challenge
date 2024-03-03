import { FC } from 'react';
import { ICON_SIZE, PropTypes } from './Icon.types';
import { Image } from './Icon.styles';

export const Icon: FC<PropTypes> = ({ size, ...props }) => <Image size={size ?? ICON_SIZE.MEDIUM} {...props} />;
