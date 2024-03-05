import { describe, expect, it, vi } from 'vitest';
import { render, user } from '@/test/testUtils';
import { SearchBar } from '../SearchBar';

describe('SearchBar', () => {
  it('should render an input and the amount of results', () => {
    const { getByRole, getByText } = render(<SearchBar value='' onSearch={vi.fn()} results={10} />);

    expect(getByRole('searchbox')).toHaveAttribute('placeholder', 'search-character');
    expect(getByText('results')).toBeInTheDocument();
  });

  it('should not render the amount of results', () => {
    const { queryByText } = render(<SearchBar value='' onSearch={vi.fn()} />);

    expect(queryByText('results')).not.toBeInTheDocument();
  });

  it('should call onSearch when the input value changes', async () => {
    const onSearch = vi.fn();
    const { getByRole } = render(<SearchBar value='hello ' onSearch={onSearch} />);

    const searchInput = getByRole('searchbox');
    await user.type(searchInput, 'world');

    expect(searchInput).toHaveValue('hello world');
    expect(onSearch).toHaveBeenCalledWith('hello world');
  });
});
