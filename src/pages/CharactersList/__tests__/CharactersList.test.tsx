import { describe, expect, it } from 'vitest';
import { waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { render, user } from '@/test/testUtils';
import { mockCharactersList } from '@/test/mocks/api-responses/characters-list';
import { CharactersList } from '../CharactersList';

describe('CharactersList', () => {
  it('should fetch and render the list of characters', async () => {
    const { getByText, findByText } = render(<CharactersList />);

    expect(await findByText(mockCharactersList.data.results[0].name)).toBeInTheDocument();

    for (const character of mockCharactersList.data.results) {
      expect(getByText(character.name)).toBeInTheDocument();
    }
  });

  it('should search for characters by name', async () => {
    const { getByRole, getByText, queryByText } = render(<CharactersList />);

    const searchInput = getByRole('searchbox');
    await user.type(searchInput, mockCharactersList.data.results[6].name);

    await waitForElementToBeRemoved(() => queryByText(mockCharactersList.data.results[0].name));
    expect(getByText(mockCharactersList.data.results[6].name)).toBeInTheDocument();
  });

  it('should update the app title', async () => {
    const { getByRole } = render(<CharactersList />);

    await waitFor(() => expect(document.title).toBe('app-title'));

    const searchInput = getByRole('searchbox');
    await user.type(searchInput, 'spider');
    await waitFor(() => expect(document.title).toBe('prefixed-app-title'));
  });

  it('should handle api errors', async () => {
    const { getByRole, findByText } = render(<CharactersList />);

    const searchInput = getByRole('searchbox');
    await user.type(searchInput, 'Throw an error');

    expect(await findByText('error')).toBeInTheDocument();
  });
});
