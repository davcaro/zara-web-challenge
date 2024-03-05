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
      return HttpResponse.json({
        ...mockCharactersList,
        data: {
          ...mockCharactersList.data,
          results: mockCharactersList.data.results.filter((character) =>
            character.name.toLowerCase().includes(nameStartsWith.toLowerCase()),
          ),
        },
      });
    }

    return HttpResponse.json(mockCharactersList);
  }),
  http.get(`${API_URL}/${API_ENDPOINTS.CHARACTERS}/:id`, ({ params }) => {
    const characterId = params.id;
    const character = mockCharactersList.data.results.find((character) => character.id === Number(characterId));

    console.log('character', character);

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
  http.get(`${API_URL}/${API_ENDPOINTS.CHARACTERS}/1/${API_ENDPOINTS.CHARACTER_COMICS}`, () =>
    HttpResponse.json(mockCharacterComics),
  ),
];
