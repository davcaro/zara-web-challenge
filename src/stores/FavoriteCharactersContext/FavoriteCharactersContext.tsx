import { createContext, FC, PropsWithChildren, useState } from 'react';
import { Character } from '@/types';
import { FavoriteCharactersContextProps } from './FavoriteCharactersContext.types';

export const FavoriteCharactersContext = createContext<FavoriteCharactersContextProps | undefined>(undefined);

export const FavoriteCharactersProvider: FC<PropsWithChildren> = ({ children, ...props }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addFavorite = (character: Character) => setFavorites((prev) => [...prev, character]);
  const removeFavorite = (id: number) => setFavorites((prev) => prev.filter((favorite) => favorite.id !== id));
  const toggleFavorite = (character: Character) =>
    isFavorite(character.id) ? removeFavorite(character.id) : addFavorite(character);
  const isFavorite = (id: number) => favorites.some((favorite) => favorite.id === id);

  return (
    <FavoriteCharactersContext.Provider
      value={{ favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite }}
      {...props}
    >
      {children}
    </FavoriteCharactersContext.Provider>
  );
};
