import { NavLink } from 'react-router-dom';
import MarvelLogoIcon from '@/assets/marvel_logo.svg?react';

export const LogoNavLink = () => {
  return (
    <NavLink to='/'>
      <MarvelLogoIcon />
    </NavLink>
  );
};
