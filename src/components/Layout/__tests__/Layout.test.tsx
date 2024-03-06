import { describe, expect, it, vi } from 'vitest';
import { render } from '@/test/testUtils';
import { FavoriteCharactersContextProps } from '@/stores/FavoriteCharactersContext';
import { mockCharactersList } from '@/test/mocks/api-responses/characters-list';
import { Layout } from '../Layout';

describe('Layout', () => {
  it('should render the marvel logo with a link to home', () => {
    const { getByTitle, getAllByRole } = render(<Layout />);

    const logoLink = getAllByRole('link')[0];
    expect(logoLink).toHaveAttribute('href', '/');

    expect(getByTitle('Marvel Logo')).toBeInTheDocument();
  });

  it('should render favorites count and a link to favorites page', () => {
    const mockFavoritesContextValue: FavoriteCharactersContextProps = {
      favorites: mockCharactersList.data.results,
      addFavorite: vi.fn(),
      removeFavorite: vi.fn(),
      toggleFavorite: vi.fn(),
      isFavorite: vi.fn(),
    };
    const { getByText, getByTitle, getAllByRole } = render(<Layout />, { favoritesContext: mockFavoritesContextValue });

    expect(getByText(mockFavoritesContextValue.favorites.length)).toBeInTheDocument();

    const favoritesLink = getAllByRole('link')[1];
    expect(favoritesLink).toHaveAttribute('href', '/favorites');

    expect(getByTitle('Favorite')).toBeInTheDocument();
  });
});
