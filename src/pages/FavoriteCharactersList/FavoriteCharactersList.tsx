import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useFavoriteCharacters } from '@/stores/FavoriteCharactersContext';
import { CharactersGrid } from '@/components/CharactersGrid';
import { Container, StyledHeading, StyledSearchBar } from './FavoriteCharactersList.styles';

export const FavoriteCharactersList: FC = () => {
  const { t } = useTranslation(['characters', 'common']);
  const [search, setSearch] = useState<string>('');
  const { favorites } = useFavoriteCharacters(search.trim());

  return (
    <>
      <Helmet>
        <title>{t('prefixed-app-title', { ns: 'common', prefix: t('favorites') })}</title>
      </Helmet>

      <Container>
        <StyledHeading level='h1'>{t('favorites')}</StyledHeading>
        <StyledSearchBar value={search} onSearch={setSearch} results={favorites.length} />
        <CharactersGrid characters={favorites} />
      </Container>
    </>
  );
};
