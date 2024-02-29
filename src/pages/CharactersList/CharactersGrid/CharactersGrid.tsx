import { FC } from 'react';
import { Character } from '@/types';
import { CharacterCard } from './CharacterCard';
import { StyledList } from './CharactersGrid.styles';

interface PropTypes {
  characters: Character[];
}

export const CharactersGrid: FC<PropTypes> = ({ characters }) => (
  <StyledList>
    {characters.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </StyledList>
);
