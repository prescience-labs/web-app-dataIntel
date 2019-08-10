import React from 'react';
import ApolloClient from 'apollo-boost';
import { ThemeProvider } from '@material-ui/styles';
import { ApolloProvider } from '@apollo/react-hooks';

import ErrorBoundary from './Components/Commons/ErrorBoundary';
import { appTheme } from './Theme';
import AppLayout from './AppLayout';

const client = new ApolloClient({
  uri: 'https://data-intel-reviews.herokuapp.com/graphql',
});

function ThemeWrapper() {
  return (
    <ThemeProvider theme={appTheme}>
      <AppLayout />
    </ThemeProvider>
  );
}

function ApolloWrapper() {
  return (
    <ApolloProvider client={client}>
      <ThemeWrapper />
    </ApolloProvider>
  );
}

function ErrorBoundry() {
  return (
    <ErrorBoundary>
      <ApolloWrapper />
    </ErrorBoundary>
  );
}

export default ErrorBoundry;
