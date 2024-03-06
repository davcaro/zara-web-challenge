import { describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useFavoriteCharacters } from '@/stores/FavoriteCharactersContext';

describe('useFavoriteCharacters', () => {
  it('should throw an error without context provider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    expect(() => {
      return renderHook(() => useFavoriteCharacters());
    }).toThrow('useFavoriteCharacters must be used within a FavoriteCharactersProvider');
  });
});
