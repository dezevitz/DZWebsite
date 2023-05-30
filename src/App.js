import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/home/HomeScreen';
import theme from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
  `    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Danielle's Website
          </a>
          <HomeScreen theme={theme}/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
