import { call, put, takeLatest } from 'redux-saga/effects';
import { login } from '../../api/auth';
import * as types from '../../actions/auth/types';
import history from '../../router/history';

const getErrorMessage = error => {
  if (error.response && error.response.status === 400) {
    if (error.response.data) {
      return error.response.data;
    }
  }
  return 'Something went wrong';
};

export function* loginSaga(action) {
  try {
    yield call(login, action.params);
    yield put({ type: types.LOGIN_SUCCESS });
    yield history.push('/');
  } catch (error) {
    yield put({ type: types.LOGIN_FAILURE, error: getErrorMessage(error) });
  }
}

export default function* watchLogin() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
}
