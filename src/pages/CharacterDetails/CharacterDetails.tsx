import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCharacterDetails } from '@/hooks/api';

export const CharacterDetails: FC = () => {
  const { id } = useParams();
  useFetchCharacterDetails(id);

  return null;
};
