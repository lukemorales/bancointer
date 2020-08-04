import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Dashboard />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
