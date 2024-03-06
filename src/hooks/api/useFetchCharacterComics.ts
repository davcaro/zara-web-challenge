import { useQuery } from '@tanstack/react-query';
import { request } from '@/lib/request';
import { ComicsListResponse } from '@/types';
import { API_ENDPOINTS } from '@/constants';

interface FetchCharacterComicsParams {
  limit?: number;
}

const fetchCharacterComics = (id?: string, params?: FetchCharacterComicsParams) =>
  request.get<ComicsListResponse>(`/${API_ENDPOINTS.CHARACTERS}/${id}/${API_ENDPOINTS.CHARACTER_COMICS}`, { params });

export const useFetchCharacterComics = (id?: string, params?: FetchCharacterComicsParams) =>
  useQuery({
    queryKey: [API_ENDPOINTS.CHARACTERS, API_ENDPOINTS.CHARACTER_COMICS, id, params],
    queryFn: () => fetchCharacterComics(id, params),
    select: ({ data: listResult }) => listResult.data.results,
    enabled: !!id,
  });
