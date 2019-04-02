import { call, put, takeLatest } from 'redux-saga/effects';
import { check } from '../../api/auth';
import * as types from '../../actions/auth/types';

export function* initSaga() {
  try {
    yield call(check);
    yield put({ type: types.INIT_SUCCESS });
  } catch (error) {
    yield put({ type: types.INIT_FAILURE });
  }
}

export default function* watchInit() {
  yield takeLatest(types.INIT_REQUEST, initSaga);
}
