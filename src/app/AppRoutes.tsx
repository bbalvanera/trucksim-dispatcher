import React from 'react';
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom';
import AppRoot from '@components/AppRoot';
import CenterCenterStack from '@components/CenterCenterStack';
import { lazyImport } from '@core/utils/lazyImport';
import { hideStartLoader } from '@core/utils/startLoader';

const { Dispatcher } = lazyImport(() => import('./dispatcher'), 'Dispatcher');

const ErrorPage = () => {
  const error = useRouteError();
  hideStartLoader({});

  console.log('error', error);

  return <CenterCenterStack>Error page this is</CenterCenterStack>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dispatcher />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
