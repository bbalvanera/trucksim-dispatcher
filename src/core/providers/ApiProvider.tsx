import React, { PropsWithChildren } from 'react';

const ApiProvider = ({ children }: PropsWithChildren<unknown>) => {
  return <>{children}</>;
};

export default ApiProvider;
