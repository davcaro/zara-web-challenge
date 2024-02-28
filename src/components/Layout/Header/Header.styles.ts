import styled from 'styled-components';
import * as media from '@/theme/media-queries.ts';

export const StyledHeader = styled.header`
  width: 100%;
  height: 8.4rem;
  padding: var(--spacing-16) var(--spacing-48);
  box-sizing: border-box;
  background-color: var(--colors-black);

  ${media.extraSmallMedia} {
    padding: var(--spacing-16);
  }
`;
