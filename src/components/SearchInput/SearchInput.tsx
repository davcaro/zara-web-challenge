import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import searchIcon from '@/assets/search.svg';
import { StyledInput, InputWrapper } from './SearchInput.styles';

export const SearchInput: FC = ({ ...props }) => {
  const { t } = useTranslation('common');

  return (
    <InputWrapper {...props}>
      <img src={searchIcon} alt={t('forms.search')} />
      <StyledInput type='search' placeholder={t('forms.search-character')} />
    </InputWrapper>
  );
};
