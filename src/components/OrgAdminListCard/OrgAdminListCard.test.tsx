import React from 'react';
import { render } from '@testing-library/react';
import OrgAdminListCard from './OrgAdminListCard';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://talawa-graphql-api.herokuapp.com/graphql',
});

describe('This is the test for Organization member page component', () => {
  test('should render 2 text elements test for the member page componet', () => {
    render(
      <ApolloProvider client={client}>
        <OrgAdminListCard
          key="123"
          id={''}
          memberName={''}
          memberLocation={''}
          joinDate={''}
          memberImage={''}
        />
      </ApolloProvider>
    );
  });
});
