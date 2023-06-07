import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    colors: {
      
      black: "#000000",
      white: "#ffffff",

      // light mode
      primaryDark: '#0C6170',
      primary: '#37BEB0',
      primaryLight: '#A4E5E0',
      secondaryLight: '#DBF5F0',

      // TODO: DARK MODE
    },
    fonts: {
      primary: 'Raleway, sans-serif',
      // TODO: Use Raleway font from here
    },
    typography: {
      allVariants: {
        color: "#000000"
      }
    }
  });
  
export default theme;
  