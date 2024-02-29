import styled from 'styled-components';
import * as media from '@/theme/media-queries';

export const Container = styled.main`
  padding: var(--spacing-48);

  ${media.extraSmallMedia} {
    padding: var(--spacing-16);
  }
`;
