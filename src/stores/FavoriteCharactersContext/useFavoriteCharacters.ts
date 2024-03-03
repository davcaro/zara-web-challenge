import { useContext } from 'react';
import { FavoriteCharactersContext } from './FavoriteCharactersContext';

export const useFavoriteCharacters = () => {
  const context = useContext(FavoriteCharactersContext);

  if (!context) {
    throw new Error('useFavoriteCharacters must be used within a FavoriteCharactersProvider');
  }

  return context;
};
