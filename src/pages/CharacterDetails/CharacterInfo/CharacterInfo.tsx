import { FC } from 'react';
import { Text } from '@/components/Text';
import { PropTypes } from './CharacterInfo.types';
import { StyledHeader, Image, Resume, Container, StyledHeading } from './CharacterInfo.styles';

export const CharacterInfo: FC<PropTypes> = ({ character }) => (
  <StyledHeader>
    <Container>
      <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />

      <Resume>
        <StyledHeading level='h1'>{character.name}</StyledHeading>
        <Text level='p1'>{character.description}</Text>
      </Resume>
    </Container>
  </StyledHeader>
);
