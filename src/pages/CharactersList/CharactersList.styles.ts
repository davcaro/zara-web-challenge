import styled, { css } from 'styled-components';
import * as media from '@/theme/media-queries';
import { SearchBar } from '@/components/SearchBar';

export const Container = styled.main`
  position: relative;
  padding: var(--spacing-48);
  padding-top: var(--spacing-60);

  ${media.extraSmallMedia} {
    padding: var(--spacing-16);
    padding-top: var(--spacing-36);
  }
`;

export const ProgressBar = styled.hr<{ loading: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0.4rem;
  margin: var(--spacing-none);
  border: none;
  background: var(--colors-marvel-red);
  transition: width 400ms ease-in-out;

  ${({ loading }) =>
    loading &&
    css`
      width: 100%;
    `}
`;

export const StyledSearchBar = styled(SearchBar)`
  margin-bottom: var(--spacing-36);
`;
