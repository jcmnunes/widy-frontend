import { call, put, takeLatest } from 'redux-saga/effects';
import { forgot } from '../../api/auth';
import * as types from '../../actions/auth/types';

const message = 'An email was sent to you with instructions to reset your password.';

export function* forgotSaga(action) {
  try {
    yield call(forgot, action.params);
    yield put({ type: types.FORGOT_SUCCESS, message });
  } catch (error) {
    yield put({ type: types.FORGOT_FAILURE, error });
  }
}

export default function* watchForgot() {
  yield takeLatest(types.FORGOT_REQUEST, forgotSaga);
}
