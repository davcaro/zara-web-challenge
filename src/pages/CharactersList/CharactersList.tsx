import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useFetchCharacters } from '@/hooks/api';
import { PageError } from '@/components/PageError';
import { CharactersGrid } from '@/components/CharactersGrid';
import { Container, ProgressBar, StyledSearchBar } from './CharactersList.styles';

const PAGE_SIZE = 50;
const DEBOUNCE_TIME = 300;
const SEARCH_QUERY_PARAM = 'q';

export const CharactersList: FC = () => {
  const { t } = useTranslation('common');
  const [searchParams, setSearchParameters] = useSearchParams();
  const searchQuery = searchParams.get(SEARCH_QUERY_PARAM) ?? '';
  const [search, setSearch] = useState<string>(searchQuery);
  const trimmedSearch = search.trim();
  const {
    data: characters,
    isFetching,
    isSuccess,
    isError,
  } = useFetchCharacters({
    nameStartsWith: trimmedSearch || null,
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
        <title>{trimmedSearch ? t('prefixed-app-title', { prefix: trimmedSearch }) : t('app-title')}</title>
      </Helmet>

      <Container>
        <ProgressBar loading={isFetching ? 'true' : 'false'} />

        <StyledSearchBar
          value={searchQuery}
          onSearch={handleSearch}
          debounceTime={DEBOUNCE_TIME}
          results={characters?.count}
        />

        {isSuccess && <CharactersGrid characters={characters.results} />}
        {isError && <PageError />}
      </Container>
    </>
  );
};
