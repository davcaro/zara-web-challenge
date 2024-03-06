import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, StyledErrorIcon, StyledText } from './PageError.styles';

export const PageError: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <StyledErrorIcon />
      <StyledText level='p1'>{t('error')}</StyledText>
    </Container>
  );
};
