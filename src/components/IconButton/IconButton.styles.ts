import styled from 'styled-components';
import { ICON_SIZE } from './IconButton.types';

const WIDTH_BY_SIZE = {
  [ICON_SIZE.SMALL]: '1.2rem',
  [ICON_SIZE.MEDIUM]: '2.4rem',
  [ICON_SIZE.LARGE]: '3.6rem',
};

export const StyledButton = styled.button<{ size: ICON_SIZE }>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  padding: var(--spacing-none);
  margin: var(--spacing-none);

  background: none;
  cursor: pointer;

  & svg {
    width: ${({ size }) => WIDTH_BY_SIZE[size]};
  }
`;
