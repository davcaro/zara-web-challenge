import { FC } from 'react';
import { useFavoriteCharacters } from '@/stores/FavoriteCharactersContext';
import HeartFilledIcon from '@/assets/heart_filled.svg?react';
import { Text } from '@/components/Text';
import { StyledNavLink } from './FavoritesNavLink.styles';

export const FavoritesNavLink: FC = () => {
  const { favorites } = useFavoriteCharacters();

  return (
    <StyledNavLink to='/favorites'>
      <HeartFilledIcon />
      <Text level='p1'>{favorites.length}</Text>
    </StyledNavLink>
  );
};
