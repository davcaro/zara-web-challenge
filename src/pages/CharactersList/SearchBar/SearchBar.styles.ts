import styled from 'styled-components';
import { Text } from '@/components/Text';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
`;

export const StyledResultsCount = styled(Text)`
  text-transform: uppercase;
`;
