import { FC } from 'react';
import { Character } from '@/types';
import { CharacterName, CharacterInfo, StyledLink, Divider, Thumbnail } from './CharacterCard.styles';

interface PropTypes {
  character: Character;
}

export const CharacterCard: FC<PropTypes> = ({ character }) => (
  <StyledLink to={`/characters/${character.id}`}>
    <Thumbnail src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
    <Divider />
    <CharacterInfo>
      <CharacterName level='p2'>{character.name}</CharacterName>
    </CharacterInfo>
  </StyledLink>
);
