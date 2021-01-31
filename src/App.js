import React, {useState} from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from './pages/home';

function App() {
    const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#00000099',
      },
      secondary: {
        main: '#0a66c2',
      },
      background: {
        default: darkMode ? '#232323' : '#f3f2ef',
        dark: darkMode ? '#181818' : '#f3f2ef',
        paper: darkMode ? '#232323' : '#fff',
      },
    },
  })
  
  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );

}

export default App;
