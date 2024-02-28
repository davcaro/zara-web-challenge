import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { CharacterCard } from './CharacterCard';

export const CharactersList: FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Helmet>
        <title>{t('app-title')}</title>
      </Helmet>

      <h1>{t('app-title')}</h1>

      <ul>
        <CharacterCard />
      </ul>
    </>
  );
};
