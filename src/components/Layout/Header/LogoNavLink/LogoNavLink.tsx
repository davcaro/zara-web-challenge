import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MarvelLogoIcon } from '@/assets';

export const LogoNavLink = () => {
  const { t } = useTranslation('common');

  return (
    <NavLink to='/'>
      <img src={MarvelLogoIcon} alt={t('marvel-logo')} />
    </NavLink>
  );
};
