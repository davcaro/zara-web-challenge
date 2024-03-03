import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDebounce } from '@/hooks/utils';
import { SearchInput } from '@/components/SearchInput';
import { PropTypes } from './SearchBar.types';
import { Container, StyledResultsCount } from './SearchBar.styles';

const DEBOUNCE_TIME = 300;

export const SearchBar: FC<PropTypes> = ({ value, onSearch, results, ...props }) => {
  const { t } = useTranslation('search');
  const [inputValue, setInputValue] = useState<string>(value);
  const debouncedSearchValue = useDebounce(inputValue, DEBOUNCE_TIME);

  // Update input value when the prop changes. E.g. when the user navigates using the Logo in the header.
  useEffect(() => {
    setInputValue(value ?? '');
  }, [value]);

  useEffect(() => {
    onSearch(debouncedSearchValue);
  }, [debouncedSearchValue, onSearch]);

  return (
    <Container {...props}>
      <SearchInput value={inputValue} onChange={setInputValue} />

      {typeof results === 'number' && (
        <StyledResultsCount level='p3'>{t('results', { count: results })}</StyledResultsCount>
      )}
    </Container>
  );
};
