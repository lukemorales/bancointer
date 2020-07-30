import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <div>Hello World</div>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
