import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useFetchCharacters } from '@/hooks/api';
import { CharactersGrid } from './CharactersGrid';
import { Container } from './CharactersList.styles';

const PAGE_SIZE = 50;

export const CharactersList: FC = () => {
  const { t } = useTranslation('common');
  const { data: characters, isSuccess } = useFetchCharacters({ limit: PAGE_SIZE });

  return (
    <>
      <Helmet>
        <title>{t('app-title')}</title>
      </Helmet>

      <Container>
        {isSuccess && <CharactersGrid characters={characters.results} />}
      </Container>
    </>
  );
};
