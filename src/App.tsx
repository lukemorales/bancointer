import React from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { AuthProvider } from './contexts/auth';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router>
        <Routes />
        <GlobalStyles />
      </Router>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
