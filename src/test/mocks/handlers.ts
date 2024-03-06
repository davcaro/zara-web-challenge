import { http, HttpHandler, HttpResponse } from 'msw';
import { API_ENDPOINTS } from '@/constants';
import { mockCharactersList } from './api-responses/characters-list';
import { mockCharacterComics } from './api-responses/character-comics';

const API_URL = import.meta.env.VITE_API_URL;

export const handlers: HttpHandler[] = [
  http.get(`${API_URL}/${API_ENDPOINTS.CHARACTERS}`, ({ request }) => {
    const url = new URL(request.url);
    const nameStartsWith = url.searchParams.get('nameStartsWith');

    if (nameStartsWith) {
      const foundResults = mockCharactersList.data.results.filter((character) =>
        character.name.toLowerCase().includes(nameStartsWith.toLowerCase()),
      );

      if (foundResults.length === 0) {
        return new HttpResponse(null, { status: 404 });
      }

      return HttpResponse.json({
        ...mockCharactersList,
        data: {
          ...mockCharactersList.data,
          results: foundResults,
        },
      });
    }

    return HttpResponse.json(mockCharactersList);
  }),
  http.get(`${API_URL}/${API_ENDPOINTS.CHARACTERS}/:id`, ({ params }) => {
    const characterId = params.id;
    const character = mockCharactersList.data.results.find((character) => character.id === Number(characterId));

    if (!character) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({
      ...mockCharactersList,
      data: {
        ...mockCharactersList.data,
        results: [character],
      },
    });
  }),
  http.get(`${API_URL}/${API_ENDPOINTS.CHARACTERS}/:id/${API_ENDPOINTS.CHARACTER_COMICS}`, () =>
    HttpResponse.json(mockCharacterComics),
  ),
];
