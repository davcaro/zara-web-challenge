import { FC } from 'react';
import { CharacterName, CharacterInfo, Container, Divider, Thumbnail } from './CharacterCard.styles';

export const CharacterCard: FC = () => (
  <Container>
    <Thumbnail src='https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg' alt='3-D Man' />
    <Divider />
    <CharacterInfo>
      <CharacterName level='p2'>3-D Man</CharacterName>
    </CharacterInfo>
  </Container>
);
