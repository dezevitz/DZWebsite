import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

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
      // Define more font variables
    },
    typography: {
      allVariants: {
        color: "#000000"
      }
    }
  });
  
export default theme;
  