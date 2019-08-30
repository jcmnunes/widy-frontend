import 'focus-visible/dist/focus-visible';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import App from './App';
import store, { runSaga } from './store';
import theme from './styles/theme';
import history from './router/history';
import { INIT_REQUEST } from './components/auth/Init/Init.types';

runSaga();

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
