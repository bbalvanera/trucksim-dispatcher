import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AdPlaceholder from '@components/AdPlaceholder';

const ContentLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        mt: '96px',
        border: '1px solid pink',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      component="main"
    >
      <Box>{children}</Box>
      <AdPlaceholder />
    </Container>
  );
};

export default ContentLayout;
