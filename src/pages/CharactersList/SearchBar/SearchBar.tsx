import { FC, useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/utils';
import { SearchInput } from '@/components/SearchInput';
import { PropTypes } from './SearchBar.types';

const DEBOUNCE_TIME = 300;

export const SearchBar: FC<PropTypes> = ({ value, onSearch, ...props }) => {
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
    <section {...props}>
      <SearchInput value={inputValue} onChange={setInputValue} />
    </section>
  );
};
