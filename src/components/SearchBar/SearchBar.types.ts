export interface PropTypes {
  value: string;
  onSearch: (search: string) => void;
  debounceTime?: number;
  results?: number;
}
