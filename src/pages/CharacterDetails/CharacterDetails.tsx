import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCharacterDetails } from '@/hooks/api';
import { CharacterInfo } from './CharacterInfo';

export const CharacterDetails: FC = () => {
  const { id } = useParams();
  const { data: character, isSuccess } = useFetchCharacterDetails(id);

  if (isSuccess) {
    return <CharacterInfo character={character} />;
  }

  return null;
};
