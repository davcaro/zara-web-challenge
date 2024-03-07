import { StyledNav } from './Header.styles';
import { LogoNavLink } from './LogoNavLink';
import { FavoritesNavLink } from './FavoritesNavLink';

export const Header = () => (
  <header>
    <StyledNav>
      <LogoNavLink />
      <FavoritesNavLink />
    </StyledNav>
  </header>
);
