import React from 'react';
import PageBody from './PageBody';
import PageHeader from './PageHeader';

const Dispatcher = () => {
  return (
    <>
      <PageHeader profileName="Profile Name" savefileName="Save name" />
      <PageBody />
    </>
  );
};

export default Dispatcher;
