import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { CharactersList } from '@/pages/CharactersList';
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
