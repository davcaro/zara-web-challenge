import styled from 'styled-components';
import { Text } from '@/components/Text';
import ErrorIcon from '@/assets/error.svg?react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-16);
  padding: var(--spacing-80);
  box-sizing: border-box;
`;

export const StyledErrorIcon = styled(ErrorIcon)`
  width: 5.6rem;
  height: 5.6rem;
  stroke: var(--colors-marvel-red);
`;

export const StyledText = styled(Text)`
  text-transform: uppercase;
`;
