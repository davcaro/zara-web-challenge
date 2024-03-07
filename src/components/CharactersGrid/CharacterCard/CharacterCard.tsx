import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useFavoriteCharacters } from '@/stores/FavoriteCharactersContext';
import { Character } from '@/types';
import HeartFilledIcon from '@/assets/heart_filled.svg?react';
import HeartOutlinedIcon from '@/assets/heart_outlined.svg?react';
import { ICON_SIZE } from '@/components/IconButton/IconButton.types';
import {
  AnimatedContainer,
  CharacterInfo,
  CharacterName,
  Divider,
  StyledIconButton,
  StyledLink,
  Thumbnail,
} from './CharacterCard.styles';

interface PropTypes {
  character: Character;
}

export const CharacterCard: FC<PropTypes> = ({ character }) => {
  const { t } = useTranslation('characters');
  const { toggleFavorite, isFavorite } = useFavoriteCharacters();

  return (
    <StyledLink to={`/characters/${character.id}`}>
      <Thumbnail
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={t('character-thumbnail', { name: character.name })}
      />
      <Divider />
      <CharacterInfo>
        <AnimatedContainer />
        <CharacterName level='p2'>{character.name}</CharacterName>
        <StyledIconButton
          icon={isFavorite(character.id) ? HeartFilledIcon : HeartOutlinedIcon}
          size={ICON_SIZE.SMALL}
          onClick={() => toggleFavorite(character)}
        />
      </CharacterInfo>
    </StyledLink>
  );
};
