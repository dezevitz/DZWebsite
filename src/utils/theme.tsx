import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      dark: '#0C6170',
      main: '#37BEB0',
      light: '#A4E5E0',
    },
    secondary: {
      main: '#DBF5F0',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
  },
  typography: {
    allVariants: {
      color: '#000000',
    },
    fontFamily: ['Raleway', "sans-serif"].join(","),
    h2: {
      fontWeight: '900'
    },
    h1: {
      fontWeight: '900'
    }
  }
  
});

export default theme;
