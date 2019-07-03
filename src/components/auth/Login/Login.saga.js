import { call, put, takeLatest } from 'redux-saga/effects';
import history from '../../../router/history';
import { loginFailure, loginSuccess } from './Login.actions';
import { LOGIN_REQUEST } from './Login.types';
import axios from 'axios';

const getErrorMessage = error => {
  if (error.response && error.response.status === 400) {
    if (error.response.data) {
      return error.response.data;
    }
  }
  return 'Something went wrong';
};

export const loginAPI = params => axios.post('/api/auth/login', params);

export function* loginSaga(action) {
  try {
    yield call(loginAPI, action.params);
    yield put(loginSuccess());
    yield history.push('/');
  } catch (error) {
    yield put(loginFailure(getErrorMessage(error)));
  }
}

export default function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
