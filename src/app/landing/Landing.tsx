import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Landing = () => {
  return (
    <Box
      sx={(theme) => ({
        p: theme.spacing(7),
        display: 'flex',
        justifyContent: 'space-between',
      })}
    >
      <Box>
        <Typography variant="h6">Profile Name</Typography>
        <Typography variant="body2">Save file name</Typography>
      </Box>
      <Box>Buttons be here</Box>
    </Box>
  );
};

export default Landing;
