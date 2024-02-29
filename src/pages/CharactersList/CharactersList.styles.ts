import styled from 'styled-components';
import * as media from '@/theme/media-queries';
import { SearchBar } from './SearchBar';

export const Container = styled.main`
  padding: var(--spacing-48);

  ${media.extraSmallMedia} {
    padding: var(--spacing-16);
  }
`;

export const StyledSearchBar = styled(SearchBar)`
  margin-bottom: var(--spacing-24);
`;
