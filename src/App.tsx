import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import * as themes from './styles/themes';
import GlobalStyles from './styles/global';
import { AuthProvider } from './contexts/auth';
import useAppTheme from './contexts/theme';

const App = () => {
  const { currentTheme } = useAppTheme();

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AuthProvider>
        <Router>
          <Routes />
          <GlobalStyles />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
