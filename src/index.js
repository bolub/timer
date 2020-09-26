import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  ChakraProvider,
  CSSReset,
} from '@chakra-ui/core';
import reportWebVitals from './reportWebVitals';
import { customTheme } from './Helpers/ChakraTheme';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDF_y1oUzTaPW3ILnBzERGI-yWYxLzn6FA",
  authDomain: "timer-7f624.firebaseapp.com",
  databaseURL: "https://timer-7f624.firebaseio.com",
  projectId: "timer-7f624",
  storageBucket: "timer-7f624.appspot.com",
  messagingSenderId: "1089958449183",
  appId: "1:1089958449183:web:257aaa22516644579f452a",
  measurementId: "G-1YYLNGMJ71"
}

firebase.initializeApp(config);
firebase.analytics();

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
