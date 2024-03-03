import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Character } from '@/types';
import { HeartOutlinedIcon } from '@/assets';
import { Icon, ICON_SIZE } from '@/components/Icon';
import { CharacterInfo, CharacterName, Divider, StyledLink, Thumbnail } from './CharacterCard.styles';

interface PropTypes {
  character: Character;
}

export const CharacterCard: FC<PropTypes> = ({ character }) => {
  const { t } = useTranslation('characters');

  return (
    <StyledLink to={`/characters/${character.id}`}>
      <Thumbnail src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <Divider />
      <CharacterInfo>
        <CharacterName level='p2'>{character.name}</CharacterName>
        <Icon src={HeartOutlinedIcon} alt={t('add-favorite')} size={ICON_SIZE.SMALL} />
      </CharacterInfo>
    </StyledLink>
  );
};
