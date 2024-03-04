import styled from 'styled-components';
import * as media from '@/theme/media-queries';
import typography from '@/theme/typography.styles';
import { Text } from '@/components/Text';
import { SearchBar } from '@/components/SearchBar';

export const Container = styled.main`
  padding: var(--spacing-48);

  ${media.extraSmallMedia} {
    padding: var(--spacing-16);
    padding-top: var(--spacing-24);
  }
`;

export const StyledHeading = styled(Text)`
  ${typography.h2};
  text-transform: uppercase;
  margin-bottom: var(--spacing-36);
`;

export const StyledSearchBar = styled(SearchBar)`
  margin-bottom: var(--spacing-36);
`;
