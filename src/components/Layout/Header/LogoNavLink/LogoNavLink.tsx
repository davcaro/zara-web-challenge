import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import marvelLogo from '@/assets/marvel_logo.svg';

export const LogoNavLink = () => {
  const { t } = useTranslation('common');

  return (
    <NavLink to='/'>
      <img src={marvelLogo} alt={t('marvel-logo')} />
    </NavLink>
  );
};
