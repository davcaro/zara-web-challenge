import { describe, expect, it, vi } from 'vitest';
import { waitFor } from '@testing-library/react';
import { render, user } from '@/test/testUtils';
import { mockCharactersList } from '@/test/mocks/api-responses/characters-list';
import { mockCharacterComics } from '@/test/mocks/api-responses/character-comics';
import { Character } from '@/types';
import { CharacterDetails } from '../CharacterDetails';

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useParams: () => ({ id: 1 }),
}));

describe('CharacterDetails', () => {
  const mockCharacterDetails: Character = mockCharactersList.data.results[0];

  it('should render the character details', async () => {
    const { getByRole, getByText, findByText } = render(<CharacterDetails />);

    await waitFor(() => expect(document.title).toBe('prefixed-app-title'));

    expect(await findByText(mockCharacterDetails.name)).toBeInTheDocument();
    expect(getByText(mockCharacterDetails.description)).toBeInTheDocument();

    const thumbnail = getByRole('img', { name: mockCharacterDetails.name });
    expect(thumbnail).toHaveAttribute(
      'src',
      `${mockCharacterDetails.thumbnail.path}.${mockCharacterDetails.thumbnail.extension}`,
    );
  });

  it('should render the character comics', async () => {
    const comics = mockCharacterComics.data.results;
    const { getByRole, getByText, getAllByText, findByText } = render(<CharacterDetails />);

    expect(getByText('comics')).toBeInTheDocument();

    expect(await findByText(comics[0].title)).toBeInTheDocument();

    for (const comic of comics) {
      expect(getByText(comic.title)).toBeInTheDocument();

      const thumbnail = getByRole('img', { name: comic.title });
      expect(thumbnail).toHaveAttribute('src', `${comic.thumbnail.path}.${comic.thumbnail.extension}`);
    }

    // Release years
    expect(getAllByText('2023')).toHaveLength(comics.length);
  });

  it('should add and remove the character from favorites', async () => {
    const { getByRole } = render(<CharacterDetails />);

    const favoriteIcon = getByRole('img', { name: 'add-favorite' });
    const favoriteButton = getByRole('button');

    expect(favoriteIcon).toHaveAttribute('alt', 'add-favorite');

    await user.click(favoriteButton);
    expect(favoriteIcon).toHaveAttribute('alt', 'remove-favorite');

    await user.click(favoriteButton);
    expect(favoriteIcon).toHaveAttribute('alt', 'add-favorite');
  });
});
