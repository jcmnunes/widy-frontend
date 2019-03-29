import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(reduxThunk, sagaMiddleware)),
  );
}

export const runSaga = () => sagaMiddleware.run(rootSaga);
