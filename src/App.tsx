import { HelmetProvider } from 'react-helmet-async';
import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppRoutes } from '@/routes';
import * as locales from '@/locales';
import './theme/global.css';

const i18nOptions: InitOptions = {
  resources: locales,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
};
i18n.use(initReactI18next).init(i18nOptions);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // Cache results to avoid reaching the API rate limit
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AppRoutes />
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
