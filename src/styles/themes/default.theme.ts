import merge from 'lodash.merge';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import baseTheme from './base.theme';

const primary = '#111827';
const secondary = '#4f46e5';
const info = '#43baff';
const positive = '#4bd48b';
const negative = '#f5592f';
const warning = '#ffc107';

const shades = {
  50: '#ffffff',
  100: '#e6f0ff',
  200: '#cce0ff',
  300: '#b3d1ff',
  400: '#99c2ff',
  500: '#80b3ff',
  600: '#66a3ff',
  700: '#4d94ff',
  800: '#3385ff',
  900: '#1a75ff',
};

const myTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    success: {
      main: positive,
    },
    error: {
      main: negative,
    },
    info: {
      main: info,
    },
    warning: {
      main: warning,
    },
    shade: { ...shades },
    action: {
      hover: shades[200],
    },
    background: {
      default: '#f1f5f9',
      paper: '#ffffff',
    },
  },
};

const newTheme: ThemeOptions = {};
merge(newTheme, myTheme, baseTheme);

const theme = createTheme(newTheme);

export default theme;
