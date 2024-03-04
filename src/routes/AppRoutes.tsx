import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { CharactersList } from '@/pages/CharactersList';
import { FavoriteCharactersList } from '@/pages/FavoriteCharactersList';
import { CharacterDetails } from '@/pages/CharacterDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <CharactersList />,
      },
      {
        path: '/favorites',
        element: <FavoriteCharactersList />,
      },
      {
        path: '/characters/:id',
        element: <CharacterDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
