import { afterAll, afterEach, beforeAll } from 'vitest';
import { server } from './src/test/mocks/node';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
