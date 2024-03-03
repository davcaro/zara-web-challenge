import { FC } from 'react';
import { Text } from '@/components/Text';
import { PropTypes } from './ComicCard.types';
import { ComicTitle, Container, Image } from './ComicCard.styles';

const RELEASE_DATE = 'onsaleDate';

export const ComicCard: FC<PropTypes> = ({ comic }) => {
  const releaseDate = comic.dates.find((date) => date.type === RELEASE_DATE);
  const releaseYear = releaseDate && new Date(releaseDate?.date).getFullYear();

  return (
    <Container>
      <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
      <ComicTitle level='p1'>{comic.title}</ComicTitle>
      {releaseYear && <Text level='p3'>{releaseYear}</Text>}
    </Container>
  );
};
