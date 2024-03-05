import { FC } from 'react';
import { useFavoriteCharacters } from '@/stores/FavoriteCharactersContext';
import HeartFilledIcon from '@/assets/heart_filled.svg?react';
import HeartOutlinedIcon from '@/assets/heart_outlined.svg?react';
import { Text } from '@/components/Text';
import { IconButton } from '@/components/IconButton';
import { PropTypes } from './CharacterInfo.types';
import { StyledHeader, Image, Resume, Container, StyledHeading, Wrapper } from './CharacterInfo.styles';

export const CharacterInfo: FC<PropTypes> = ({ character }) => {
  const { toggleFavorite, isFavorite } = useFavoriteCharacters();

  return (
    <StyledHeader>
      <Container>
        <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />

        <Resume>
          <Wrapper>
            <StyledHeading level='h1'>{character.name}</StyledHeading>
            <IconButton
              icon={isFavorite(character.id) ? HeartFilledIcon : HeartOutlinedIcon}
              onClick={() => toggleFavorite(character)}
            />
          </Wrapper>
          <Text level='p1'>{character.description}</Text>
        </Resume>
      </Container>
    </StyledHeader>
  );
};
