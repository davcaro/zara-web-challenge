import styled from 'styled-components';
import * as media from '@/theme/media-queries';
import { SearchBar } from '@/components/SearchBar';

export const Container = styled.main`
  padding: var(--spacing-48);
  padding-top: var(--spacing-60);

  ${media.extraSmallMedia} {
    padding: var(--spacing-16);
    padding-top: var(--spacing-36);
  }
`;

export const StyledSearchBar = styled(SearchBar)`
  margin-bottom: var(--spacing-36);
`;
