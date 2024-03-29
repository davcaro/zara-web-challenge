import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ComicCard } from './ComicCard';
import { PropTypes } from './CharacterComics.types';
import { Container, List, StyledHeading, StyledSection } from './CharacterComics.styles';

export const CharacterComics: FC<PropTypes> = ({ comics }) => {
  const { t } = useTranslation('comics');

  return (
    <StyledSection>
      <Container>
        <StyledHeading level='h2'>{t('comics')}</StyledHeading>

        <List>
          {comics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </List>
      </Container>
    </StyledSection>
  );
};
