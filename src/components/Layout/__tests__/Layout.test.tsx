import { describe, expect, it, vi } from 'vitest';
import { render } from '@/test/testUtils';
import { FavoriteCharactersContextProps } from '@/stores/FavoriteCharactersContext';
import { mockCharactersList } from '@/test/mocks/api-responses/characters-list';
import { Layout } from '../Layout';

describe('Layout', () => {
  it('should render the marvel logo with a link to home', () => {
    const { getByRole } = render(<Layout />);

    const logoLink = getByRole('link', { name: 'marvel-logo' });
    expect(logoLink).toHaveAttribute('href', '/');

    const logoImage = getByRole('img', { name: 'marvel-logo' });
    expect(logoImage).toHaveAttribute('alt', 'marvel-logo');
  });

  it('should favorites count and a link to favorites page', () => {
    const mockFavoritesContextValue: FavoriteCharactersContextProps = {
      favorites: mockCharactersList.data.results,
      addFavorite: vi.fn(),
      removeFavorite: vi.fn(),
      toggleFavorite: vi.fn(),
      isFavorite: vi.fn(),
    };
    const { getByRole, getByText, getAllByRole } = render(<Layout />, { favoritesContext: mockFavoritesContextValue });

    expect(getByText(mockFavoritesContextValue.favorites.length)).toBeInTheDocument();

    const favoritesLink = getAllByRole('link')[1];
    expect(favoritesLink).toHaveAttribute('href', '/favorites');

    const favoritesImage = getByRole('img', { name: 'favorite-characters' });
    expect(favoritesImage).toHaveAttribute('alt', 'favorite-characters');
  });
});
