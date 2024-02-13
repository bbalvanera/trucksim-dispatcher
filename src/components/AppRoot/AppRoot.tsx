import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';

const AppRoot = () => {
  return (
    <Suspense fallback={<Backdrop open>Carganding!</Backdrop>}>
      <Outlet />
    </Suspense>
  );
};

export default AppRoot;
