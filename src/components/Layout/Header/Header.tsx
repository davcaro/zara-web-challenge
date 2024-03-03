import { StyledHeader } from './Header.styles';
import { LogoNavLink } from './LogoNavLink';
import { FavoritesNavLink } from './FavoritesNavLink';

export const Header = () => (
  <StyledHeader>
    <LogoNavLink />
    <FavoritesNavLink />
  </StyledHeader>
);
