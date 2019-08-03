import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import ErrorBoundary from './Components/Commons/ErrorBoundary';
import { appTheme } from './Theme';
import AppLayout from './AppLayout';

function ThemeWrapper() {
  return (
    <ThemeProvider theme={appTheme}>
      <AppLayout />
    </ThemeProvider>
  );
}

function ErrorBoundry() {
  return (
    <ErrorBoundary>
      <ThemeWrapper />
    </ErrorBoundary>
  );
}

export default ErrorBoundry;
