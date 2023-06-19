import './App.css';
import React from 'react';
import HomeScreen from './components/home/HomeScreen';
import theme from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <HomeScreen/>
      </div>
    </ThemeProvider>
  );
}

export default App;
