import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import { onError } from '@apollo/link-error';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  headers: {
    authorization: 'Bearer ' + localStorage.getItem('token') || '',
  },
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, httpLink]),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
