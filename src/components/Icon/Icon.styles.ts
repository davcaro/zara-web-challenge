import styled from 'styled-components';
import { ICON_SIZE, StylingProps } from './Icon.types';

const WIDTH_BY_SIZE = {
  [ICON_SIZE.SMALL]: '1.2rem',
  [ICON_SIZE.MEDIUM]: '2.4rem',
  [ICON_SIZE.LARGE]: '3.6rem',
};

export const Image = styled.img<StylingProps>`
  width: ${({ size }) => WIDTH_BY_SIZE[size]};
`;
