import React, { PropsWithChildren } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '@styles/themes';

const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  console.log('defaultTheme', defaultTheme);

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
