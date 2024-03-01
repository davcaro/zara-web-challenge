import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import searchIcon from '@/assets/search.svg';
import { PropTypes } from './SearchInput.types';
import { StyledInput, InputWrapper } from './SearchInput.styles';

export const SearchInput: FC<PropTypes> = ({ value, onChange, ...props }) => {
  const { t } = useTranslation('common');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <InputWrapper {...props}>
      <img src={searchIcon} alt={t('forms.search')} />
      <StyledInput type='search' placeholder={t('forms.search-character')} value={value} onChange={handleChange} />
    </InputWrapper>
  );
};
