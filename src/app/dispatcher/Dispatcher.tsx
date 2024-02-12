import React from 'react';
import Body from './Body';
import Header from './Header';

const Dispatcher = () => {
  return (
    <>
      <Header profileName="Profile Name" savefileName="Save name" />
      <Body />
    </>
  );
};

export default Dispatcher;
