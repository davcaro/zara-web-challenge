import { describe, expect, it, vi } from 'vitest';
import { fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from '@/test/testUtils';
import { mockCharactersList } from '@/test/mocks/api-responses/characters-list';
import { FavoriteCharactersContextProps } from '@/stores/FavoriteCharactersContext';
import { FavoriteCharactersList } from '../FavoriteCharactersList';

const mockFavoriteCharactersContextValue: FavoriteCharactersContextProps = {
  favorites: mockCharactersList.data.results,
  addFavorite: vi.fn(),
  removeFavorite: vi.fn(),
  toggleFavorite: vi.fn(),
  isFavorite: vi.fn(),
};

describe('FavoriteCharactersList', () => {
  it('should render the list of favorite characters', async () => {
    const { getByRole, getByText } = render(<FavoriteCharactersList />, {
      favoritesContext: mockFavoriteCharactersContextValue,
    });

    await waitFor(() => expect(document.title).toBe('prefixed-app-title'));

    expect(getByText('favorites')).toBeInTheDocument();
    expect(getByRole('searchbox')).toBeInTheDocument();

    for (const character of mockFavoriteCharactersContextValue.favorites) {
      expect(getByText(character.name)).toBeInTheDocument();
    }
  });

  it('should filter the list of characters by name', async () => {
    const { getByRole, getByText, queryByText } = render(<FavoriteCharactersList />, {
      favoritesContext: mockFavoriteCharactersContextValue,
    });

    const searchInput = getByRole('searchbox');
    fireEvent.change(searchInput, { target: { value: mockFavoriteCharactersContextValue.favorites[6].name } });

    await waitForElementToBeRemoved(() => queryByText(mockFavoriteCharactersContextValue.favorites[0].name));
    expect(getByText(mockFavoriteCharactersContextValue.favorites[6].name)).toBeInTheDocument();
  });
});
