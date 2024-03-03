import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useFavoriteCharacters } from '@/stores/FavoriteCharactersContext';
import { Character } from '@/types';
import { HeartFilledIcon, HeartOutlinedIcon } from '@/assets';
import { IconButton } from '@/components/IconButton';
import { ICON_SIZE } from '@/components/Icon';
import { CharacterInfo, CharacterName, Divider, StyledLink, Thumbnail } from './CharacterCard.styles';

interface PropTypes {
  character: Character;
}

export const CharacterCard: FC<PropTypes> = ({ character }) => {
  const { t } = useTranslation('characters');
  const { toggleFavorite, isFavorite } = useFavoriteCharacters();

  return (
    <StyledLink to={`/characters/${character.id}`}>
      <Thumbnail src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <Divider />
      <CharacterInfo>
        <CharacterName level='p2'>{character.name}</CharacterName>
        <IconButton
          icon={isFavorite(character.id) ? HeartFilledIcon : HeartOutlinedIcon}
          alt={isFavorite(character.id) ? t('remove-favorite') : t('add-favorite')}
          size={ICON_SIZE.SMALL}
          onClick={() => toggleFavorite(character)}
        />
      </CharacterInfo>
    </StyledLink>
  );
};
