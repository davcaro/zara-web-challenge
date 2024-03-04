import { useContext, useMemo } from 'react';
import Fuse from 'fuse.js';
import { FavoriteCharactersContext } from './FavoriteCharactersContext';
import { Character } from '@/types';

const SEARCH_OPTIONS = {
  keys: ['name'],
  threshold: 0.4,
};

export const useFavoriteCharacters = (search?: string) => {
  const context = useContext(FavoriteCharactersContext);

  if (!context) {
    throw new Error('useFavoriteCharacters must be used within a FavoriteCharactersProvider');
  }

  const filteredCharacters = useMemo(() => {
    if (!search?.length) {
      return context.favorites;
    }

    const fuseList = new Fuse(context.favorites, SEARCH_OPTIONS);
    return fuseList.search(search).map(({ item }: { item: Character }) => item);
  }, [context.favorites, search]);

  return { ...context, favorites: filteredCharacters };
};
