import React from 'react';

import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AnimatePresence exitBeforeEnter>
      <Dashboard />
    </AnimatePresence>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
