import '@testing-library/jest-dom/vitest';
import React from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { FavoriteCharactersContextProps, FavoriteCharactersProvider } from '@/stores/FavoriteCharactersContext';

i18n.use(initReactI18next).init({
  resources: {},
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const queryClient = new QueryClient();

export interface ProviderOptions extends RenderOptions {
  favoritesContext?: FavoriteCharactersContextProps;
}

interface ProvidersProps extends ProviderOptions {
  children: React.ReactNode;
}

const Providers = ({ favoritesContext, children }: ProvidersProps) => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FavoriteCharactersProvider {...(favoritesContext ? { value: favoritesContext } : {})}>
          {children}
        </FavoriteCharactersProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

const renderWithProviders = (ui: React.ReactElement, options: ProviderOptions = {}) => {
  const { favoritesContext, ...rest } = options;

  const rtl = render(ui, {
    wrapper: ({ children }) => <Providers favoritesContext={favoritesContext}>{children}</Providers>,
    ...rest,
  });

  return {
    ...rtl,
    rerender: (ui: React.ReactElement, rerenderOptions?: ProviderOptions) =>
      renderWithProviders(ui, {
        container: rtl.container,
        ...options,
        ...rerenderOptions,
      }),
  };
};

export { screen } from '@testing-library/react';

export { renderWithProviders as render, userEvent as user };
