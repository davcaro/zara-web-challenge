import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, StyledLoader, StyledText } from './PageLoader.styles';

export const PageLoader: FC = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <StyledLoader />
      <StyledText level='p1'>{t('loading')}</StyledText>
    </Container>
  );
};
