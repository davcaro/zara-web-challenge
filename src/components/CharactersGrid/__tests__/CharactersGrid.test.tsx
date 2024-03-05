import { describe, expect, it } from 'vitest';
import { render } from '@/test/testUtils';
import { Character } from '@/types';
import { mockCharactersList } from '@/test/mocks/api-responses/characters-list';
import { CharactersGrid } from '../CharactersGrid';

const mockCharacters: Character[] = mockCharactersList.data.results;

describe('CharactersGrid', () => {
  it('should render the list of characters', () => {
    const { getByText } = render(<CharactersGrid characters={mockCharacters} />);

    for (const character of mockCharacters) {
      expect(getByText(character.name)).toBeInTheDocument();
    }
  });
});
