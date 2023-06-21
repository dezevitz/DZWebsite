import './App.css';
import React from 'react';
import HomeScreen from './components/home/HomeScreen';
import ResumeScreen from './components/home/ResumeScreen';
import theme from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route path="/resume" element={<ResumeScreen/>} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
