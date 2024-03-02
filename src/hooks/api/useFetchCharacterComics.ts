import { useQuery } from '@tanstack/react-query';
import { request } from '@/lib/request';
import { ComicsListResponse } from '@/types';
import { API_ENDPOINTS } from '@/constants';

const fetchCharacterComics = (id?: string) =>
  request.get<ComicsListResponse>(`/${API_ENDPOINTS.CHARACTERS}/${id}/${API_ENDPOINTS.CHARACTER_COMICS}`);

export const useFetchCharacterComics = (id?: string) =>
  useQuery({
    queryKey: [API_ENDPOINTS.CHARACTERS, API_ENDPOINTS.CHARACTER_COMICS, id],
    queryFn: () => fetchCharacterComics(id),
    select: ({ data: listResult }) => listResult.data.results,
    enabled: !!id,
  });
