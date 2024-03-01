import { FC } from 'react';
import { Character } from '@/types';
import { CharacterCard } from './CharacterCard';
import { StyledGrid } from './CharactersGrid.styles';

interface PropTypes {
  characters: Character[];
}

export const CharactersGrid: FC<PropTypes> = ({ characters }) => (
  <StyledGrid>
    {characters.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </StyledGrid>
);
