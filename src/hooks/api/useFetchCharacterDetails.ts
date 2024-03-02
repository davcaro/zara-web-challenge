import { useQuery } from '@tanstack/react-query';
import { request } from '@/lib/request';
import { CharactersListResponse } from '@/types';
import { API_ENDPOINTS } from '@/constants';

const fetchCharacterDetails = (id?: string) => {
  return request.get<CharactersListResponse>(`/${API_ENDPOINTS.CHARACTERS}/${id}`);
};

export const useFetchCharacterDetails = (id?: string) =>
  useQuery({
    queryKey: [API_ENDPOINTS.CHARACTERS, id],
    queryFn: () => fetchCharacterDetails(id),
    select: ({ data: listResponse }) => listResponse.data.results[0],
    enabled: !!id,
  });
