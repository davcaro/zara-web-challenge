/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  test: {
    globals: true,
    root: __dirname,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        '*.cjs',
        'src/locales/**',
        'src/types/**',
        'src/test/**',
        '**/*.d.ts',
        '**/*.types.ts',
        '**/index.ts',
        'src/main.tsx',
        'src/App.tsx',
      ],
    },
  },
});
