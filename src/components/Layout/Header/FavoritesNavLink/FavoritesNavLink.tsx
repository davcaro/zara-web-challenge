import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HeartFilledIcon } from '@/assets';
import { useFavoriteCharacters } from '@/stores/FavoriteCharactersContext';
import { Text } from '@/components/Text';
import { Icon } from '@/components/Icon';
import { StyledNavLink } from './FavoritesNavLink.styles';

export const FavoritesNavLink: FC = () => {
  const { t } = useTranslation('characters');
  const { favorites } = useFavoriteCharacters();

  return (
    <StyledNavLink to='/favorites'>
      <Icon src={HeartFilledIcon} alt={t('favorite-characters')} />
      <Text level='p1'>{favorites.length}</Text>
    </StyledNavLink>
  );
};
