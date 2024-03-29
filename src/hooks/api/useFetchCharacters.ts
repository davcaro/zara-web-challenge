import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { request } from '@/lib/request';
import { API_ENDPOINTS } from '@/constants';
import { CharactersListResponse } from '@/types';

interface FetchCharactersParams {
  nameStartsWith?: string | null;
  limit?: number;
}

const fetchCharacters = (params?: FetchCharactersParams) => {
  return request.get<CharactersListResponse>(`/${API_ENDPOINTS.CHARACTERS}`, { params });
};

export const useFetchCharacters = (params?: FetchCharactersParams) =>
  useQuery({
    queryKey: [API_ENDPOINTS.CHARACTERS, params],
    queryFn: () => fetchCharacters(params),
    select: ({ data: listResponse }) => listResponse.data,
    placeholderData: keepPreviousData,
  });
