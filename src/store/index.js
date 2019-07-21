import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export const runSaga = () => sagaMiddleware.run(rootSaga);
