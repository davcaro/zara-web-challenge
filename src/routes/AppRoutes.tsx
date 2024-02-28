import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from '../App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
