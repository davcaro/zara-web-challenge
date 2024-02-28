import styled from 'styled-components';
import typography from '@/theme/typography.styles';
import { PropTypes } from './Text.types';

export const NativeText = styled.p.withConfig({
  shouldForwardProp: (prop) => !['level'].includes(prop),
})<PropTypes>`
  ${({ level }) => typography[level]};
`;
