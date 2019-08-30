import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// eslint-disable-next-line import/no-cycle
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)),
);

export const runSaga = () => sagaMiddleware.run(rootSaga);
