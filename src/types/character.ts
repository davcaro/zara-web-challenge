import { Pagination } from '@/types';

export interface CharactersListResponse {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: Character;
  etag: string;
  status: string;
}

export interface Character extends Pagination {
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: ResourcesCollection;
  series: ResourcesCollection;
  stories: ResourcesCollection;
  events: ResourcesCollection;
  urls: Url[];
}

export interface ResourcesCollection {
  available: number;
  collectionURI: string;
  items: Resource[];
  returned: number;
}

export interface Resource {
  resourceURI: string;
  name: string;
  type?: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Url {
  type: string;
  url: string;
}
