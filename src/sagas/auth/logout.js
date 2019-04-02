import { call, put, takeLatest } from 'redux-saga/effects';
import { logout } from '../../api/auth';
import * as types from '../../actions/auth/types';
import history from '../../router/history';

export function* logoutSaga() {
  try {
    yield call(logout);
    yield put({ type: types.LOGOUT_SUCCESS });
    yield history.push('/login');
  } catch (error) {
    yield put({ type: types.LOGOUT_FAILURE, error });
  }
}

export default function* watchLogout() {
  yield takeLatest(types.LOGOUT_REQUEST, logoutSaga);
}
