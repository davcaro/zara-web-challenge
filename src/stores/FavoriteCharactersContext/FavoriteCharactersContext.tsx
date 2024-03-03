import { createContext, FC, PropsWithChildren, useState } from 'react';
import { FavoriteCharactersContextProps } from './FavoriteCharactersContext.types';

export const FavoriteCharactersContext = createContext<FavoriteCharactersContextProps | undefined>(undefined);

export const FavoriteCharactersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((favorite) => favorite !== id);
      }
      return [...prev, id];
    });
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return (
    <FavoriteCharactersContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteCharactersContext.Provider>
  );
};
