import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useFetchCharacterComics, useFetchCharacterDetails } from '@/hooks/api';
import { PageLoader } from '@/components/PageLoader';
import { PageError } from '@/components/PageError';
import { CharacterInfo } from './CharacterInfo';
import { CharacterComics } from './CharacterComics';

const PAGE_SIZE = 20;

export const CharacterDetails: FC = () => {
  const { t } = useTranslation('common');
  const { id } = useParams();
  const {
    data: character,
    isSuccess: isSuccessCharacter,
    isLoading: isLoadingCharacter,
  } = useFetchCharacterDetails(id);
  const { data: comics, isSuccess: isSuccessComics } = useFetchCharacterComics(id, { limit: PAGE_SIZE });

  if (isSuccessCharacter) {
    return (
      <>
        <Helmet>
          <title>{t('prefixed-app-title', { prefix: character?.name })}</title>
        </Helmet>

        <main>
          <article>
            <CharacterInfo character={character} />
            {isSuccessComics && !!comics.length && <CharacterComics comics={comics} />}
          </article>
        </main>
      </>
    );
  }

  if (isLoadingCharacter) {
    return <PageLoader />;
  }

  return <PageError />;
};
