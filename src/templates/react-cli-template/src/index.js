import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store from "./redux/store";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './config/theme';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  </Provider>
, document.getElementById('root'))
