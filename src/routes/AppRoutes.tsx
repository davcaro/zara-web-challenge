import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
