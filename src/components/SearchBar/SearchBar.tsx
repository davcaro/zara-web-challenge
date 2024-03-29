import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDebounce } from '@/hooks/utils';
import { SearchInput } from '@/components/SearchInput';
import { PropTypes } from './SearchBar.types';
import { Container, StyledResultsCount } from './SearchBar.styles';

export const SearchBar: FC<PropTypes> = ({ value, onSearch, debounceTime = 0, results, ...props }) => {
  const { t } = useTranslation('search');
  const [inputValue, setInputValue] = useState<string>(value);
  const debouncedSearchValue = useDebounce(inputValue, debounceTime);

  // Update input value when the prop changes. E.g. when the user navigates using the Logo in the header.
  useEffect(() => {
    setInputValue(value);
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
