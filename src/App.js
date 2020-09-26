import React, { lazy, Suspense } from 'react';

import {
  Spinner,
  Center
} from '@chakra-ui/core';

import { Switch, Route } from 'react-router-dom';

const Landing = lazy(() => import('./Components/Landing'));

const Loader = () => {
  return (
    <Center height="100vh">
      <Spinner />
    </Center>
  );
}

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
