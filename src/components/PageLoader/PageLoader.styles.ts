import styled from 'styled-components';
import { Text } from '@/components/Text';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-16);
  padding: var(--spacing-80);
  box-sizing: border-box;
`;

export const StyledLoader = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border: 0.5rem solid;
  border-color: var(--colors-marvel-red) transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledText = styled(Text)`
  text-transform: uppercase;
`;
