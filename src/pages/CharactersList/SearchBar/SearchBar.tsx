import { FC } from 'react';
import { SearchInput } from '@/components/SearchInput';

export const SearchBar: FC = ({ ...props }) => {
  return (
    <section {...props}>
      <SearchInput />
    </section>
  );
};
