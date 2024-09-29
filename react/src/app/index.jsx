import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

import AppRouter from '../routes/router';

import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <AppRouter />
      </Router>
    </ChakraProvider>
  </StrictMode>
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
