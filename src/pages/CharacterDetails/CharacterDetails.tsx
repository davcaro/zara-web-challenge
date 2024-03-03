import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useFetchCharacterComics, useFetchCharacterDetails } from '@/hooks/api';
import { CharacterInfo } from './CharacterInfo';
import { CharacterComics } from './CharacterComics';

export const CharacterDetails: FC = () => {
  const { t } = useTranslation('common');
  const { id } = useParams();
  const { data: character, isSuccess: isSuccessCharacter } = useFetchCharacterDetails(id);
  const { data: comics, isSuccess: isSuccessComics } = useFetchCharacterComics(id);

  if (isSuccessCharacter) {
    return (
      <>
        <Helmet>
          <title>{t('prefixed-app-title', { prefix: character?.name })}</title>
        </Helmet>

        <CharacterInfo character={character} />
        {isSuccessComics && <CharacterComics comics={comics} />}
      </>
    );
  }

  return null;
};
