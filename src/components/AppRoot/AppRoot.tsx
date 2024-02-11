import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import ContentLayout from '@components/ContentLayout';
import Layout from '@components/Layout';

const AppRoot = () => {
  return (
    <Layout>
      <Suspense fallback={<Backdrop open>Cargando</Backdrop>}>
        <ContentLayout>
          <Outlet />
        </ContentLayout>
      </Suspense>
    </Layout>
  );
};

export default AppRoot;
