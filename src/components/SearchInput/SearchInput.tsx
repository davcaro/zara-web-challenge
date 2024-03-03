import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchIcon } from '@/assets';
import { PropTypes } from './SearchInput.types';
import { StyledInput, InputWrapper } from './SearchInput.styles';

export const SearchInput: FC<PropTypes> = ({ value, onChange, ...props }) => {
  const { t } = useTranslation('search');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <InputWrapper {...props}>
      <img src={SearchIcon} alt={t('search')} />
      <StyledInput type='search' placeholder={t('search-character')} value={value} onChange={handleChange} />
    </InputWrapper>
  );
};
