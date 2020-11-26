import React, { lazy, Suspense } from 'react';

import {
  Spinner,
  Center
} from '@chakra-ui/core';

import { Switch, Route, Redirect } from 'react-router-dom';

const Landing = lazy(() => import('./Components/Landing'));
const Dashboard = lazy(() => import('./Components/Dashboard'));
const Login = lazy(() => import('./Components/Auth/Login'))
const ForgotPassword = lazy(() => import('./Components/Auth/ForgotPassword'))
const Signup = lazy(() => import('./Components/Auth/Signup'))

const Loader = () => {
  return (
    <Center height="100vh">
      <Spinner />
    </Center>
  );
}

const logged = JSON.parse(localStorage.getItem("loggedIn"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {!logged &&
          <React.Fragment>
            <Route exact path="/">
              <Landing />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/ForgotPassword">
              <ForgotPassword />
            </Route>

            <Redirect to="/login" />
          </React.Fragment>
        }

        {logged &&
          <React.Fragment>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

            <Redirect to="/dashboard" />
          </React.Fragment>

        }


      </Switch>
    </Suspense>
  );
}

export default App;
