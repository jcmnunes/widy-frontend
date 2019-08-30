import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { INIT_REQUEST } from './Init.types';
import { initFailure, initSuccess } from './Init.actions';

const checkAPI = () => axios.get('/api/auth/check');

export function* initSaga() {
  try {
    yield call(checkAPI);
    yield put(initSuccess());
  } catch (error) {
    yield put(initFailure());
  }
}

export default function* watchInit() {
  yield takeLatest(INIT_REQUEST, initSaga);
}
