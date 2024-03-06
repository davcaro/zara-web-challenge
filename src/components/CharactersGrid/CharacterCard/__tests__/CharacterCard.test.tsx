import { describe, expect, it } from 'vitest';
import { render, user } from '@/test/testUtils';
import { mockCharactersList } from '@/test/mocks/api-responses/characters-list';
import { Character } from '@/types';
import { CharacterCard } from '../CharacterCard';

const mockCharacter: Character = mockCharactersList.data.results[0];

describe('CharacterCard', () => {
  it('should render the character', () => {
    const { getByRole, getByText } = render(<CharacterCard character={mockCharacter} />);

    expect(getByRole('link')).toHaveAttribute('href', `/characters/${mockCharacter.id}`);

    const thumbnail = getByRole('img', { name: mockCharacter.name });
    expect(thumbnail).toHaveAttribute('src', `${mockCharacter.thumbnail.path}.${mockCharacter.thumbnail.extension}`);
    expect(thumbnail).toHaveAttribute('alt', mockCharacter.name);

    expect(getByText(mockCharacter.name)).toBeInTheDocument();
  });

  it('should add and remove the character from favorites', async () => {
    const { getByRole, getByTitle } = render(<CharacterCard character={mockCharacter} />);

    const favoriteButton = getByRole('button');

    expect(getByTitle('Not favorite')).toBeInTheDocument();

    await user.click(favoriteButton);
    expect(getByTitle('Favorite')).toBeInTheDocument();

    await user.click(favoriteButton);
    expect(getByTitle('Not favorite')).toBeInTheDocument();
  });
});
