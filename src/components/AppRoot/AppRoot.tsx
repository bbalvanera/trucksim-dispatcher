import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import ContentLayout from '@components/ContentLayout';
import Layout from '@components/Layout';

const AppRoot = () => {
  return (
    <Suspense fallback={<Backdrop open>Carganding!</Backdrop>}>
      <Layout>
        <ContentLayout>
          <Outlet />
        </ContentLayout>
      </Layout>
    </Suspense>
  );
};

export default AppRoot;
