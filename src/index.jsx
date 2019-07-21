import 'focus-visible/dist/focus-visible';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import configureStore, { runSaga } from './store';
import theme from './styles/theme';
import history from './router/history';
import { INIT_REQUEST } from './components/auth/Init/Init.types';
import initializeToaster from './helpers/toast';

import App from './App';

const store = configureStore();
runSaga();

// eslint-disable-next-line import/prefer-default-export
export const toast = initializeToaster(store);

store.dispatch({ type: INIT_REQUEST });

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
