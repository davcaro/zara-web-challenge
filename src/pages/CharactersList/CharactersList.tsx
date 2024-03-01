import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useFetchCharacters } from '@/hooks/api';
import { CharactersGrid } from './CharactersGrid';
import { Container, StyledSearchBar } from './CharactersList.styles';

const PAGE_SIZE = 50;
const SEARCH_QUERY_PARAM = 'q';

export const CharactersList: FC = () => {
  const { t } = useTranslation('common');
  const [searchParams, setSearchParameters] = useSearchParams();
  const searchQuery = searchParams.get(SEARCH_QUERY_PARAM) ?? '';
  const [search, setSearch] = useState<string>(searchQuery);
  const { data: characters, isSuccess } = useFetchCharacters({
    nameStartsWith: search.trim() || null,
    limit: PAGE_SIZE,
  });

  const handleSearch = useCallback(
    (value: string) => {
      setSearch(value);
      setSearchParameters(value ? { [SEARCH_QUERY_PARAM]: value } : {});
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      <Helmet>
        <title>{t('app-title')}</title>
      </Helmet>

      <Container>
        <StyledSearchBar value={searchQuery} onSearch={handleSearch} results={characters?.count} />
        {isSuccess && <CharactersGrid characters={characters.results} />}
      </Container>
    </>
  );
};
