import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import configureStore, { runSaga } from './store';
import theme from './styles/theme';
import history from './router/history';
import initThunk from './thunks/init';

import App from './App';

const store = configureStore();
runSaga();

store.dispatch(initThunk());

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

export default store;
