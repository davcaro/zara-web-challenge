import { describe, expect, it } from 'vitest';
import { waitForElementToBeRemoved } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { render, user } from '@/test/testUtils';
import { mockCharactersList } from '@/test/mocks/api-responses/characters-list';
import { mockCharacterComics } from '@/test/mocks/api-responses/character-comics';
import { Character } from '@/types';
import { CharacterDetails } from '../CharacterDetails';

const renderComponent = (id = '1') =>
  render(
    <Routes>
      <Route path='/:id' element={<CharacterDetails />} />
    </Routes>,
    { initialEntries: [`/${id}`] },
  );

describe('CharacterDetails', () => {
  const mockCharacterDetails: Character = mockCharactersList.data.results[0];

  it('should render the character details', async () => {
    const { getByRole, getByText, queryByText } = renderComponent();

    expect(getByText('loading')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => queryByText('loading'));

    expect(document.title).toBe('prefixed-app-title');

    expect(getByText(mockCharacterDetails.name)).toBeInTheDocument();
    expect(getByText(mockCharacterDetails.description)).toBeInTheDocument();

    const thumbnail = getByRole('img', { name: 'character-thumbnail' });
    expect(thumbnail).toHaveAttribute(
      'src',
      `${mockCharacterDetails.thumbnail.path}.${mockCharacterDetails.thumbnail.extension}`,
    );
  });

  it('should render the character comics', async () => {
    const comics = mockCharacterComics.data.results;
    const { getByText, getAllByRole, getAllByText, findByText } = renderComponent();

    expect(getByText('comics')).toBeInTheDocument();

    expect(await findByText(comics[0].title)).toBeInTheDocument();

    comics.forEach((comic, index) => {
      expect(getByText(comic.title)).toBeInTheDocument();

      const thumbnail = getAllByRole('img', { name: 'comic-thumbnail' })[index];
      expect(thumbnail).toHaveAttribute('src', `${comic.thumbnail.path}.${comic.thumbnail.extension}`);
    });

    // Release years
    expect(getAllByText('2023')).toHaveLength(comics.length);
  });

  it('should add and remove the character from favorites', async () => {
    const { getByRole, getByLabelText } = renderComponent();

    const favoriteButton = getByRole('button');

    expect(getByLabelText('Not favorite')).toBeInTheDocument();

    await user.click(favoriteButton);
    expect(getByLabelText('Favorite')).toBeInTheDocument();

    await user.click(favoriteButton);
    expect(getByLabelText('Not favorite')).toBeInTheDocument();
  });

  it('should handle api errors', async () => {
    const { findByText } = renderComponent('404');

    expect(await findByText('error')).toBeInTheDocument();
  });
});
