import React, { PropsWithChildren, Suspense, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import AdPlaceholder from '@components/AdPlaceholder';
import useSx from './sx';

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  const [age, setAge] = useState('');
  const sx = useSx();

  return (
    <Suspense fallback={<Backdrop open>Cargando</Backdrop>}>
      <AppBar sx={sx}>
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'row' }} disableGutters>
          <Toolbar sx={{ flex: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Profiles</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Select your profile"
                onChange={(e) => setAge(e.target.value as string)}
              >
                <MenuItem value={'10'}>Ten</MenuItem>
                <MenuItem value={'20'}>Twenty</MenuItem>
                <MenuItem value={'30'}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Profiles</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Select your profile"
                onChange={(e) => setAge(e.target.value as string)}
              >
                <MenuItem value={'10'}>Ten</MenuItem>
                <MenuItem value={'20'}>Twenty</MenuItem>
                <MenuItem value={'30'}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Box className="TsdInstalledGames-root">There be buttons here</Box>
          </Toolbar>
          <AdPlaceholder />
        </Container>
      </AppBar>
      {children}
    </Suspense>
  );
};

export default Layout;
