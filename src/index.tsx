import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';
import { AppThemeProvider } from './contexts/theme';

ReactDOM.render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
