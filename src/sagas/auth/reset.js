import { call, put, takeLatest } from 'redux-saga/effects';
import history from '../../router/history';
import { reset } from '../../api/auth';
import * as types from '../../actions/auth/types';
import toast from '../../helpers/toast';

const getErrorMessage = error => {
  if (error.response && error.response.status === 400) {
    if (error.response.data) {
      return error.response.data.message;
    }
  }
  return 'Something went wrong';
};

export function* resetSaga(action) {
  try {
    yield call(reset, action.params);
    yield put({ type: types.RESET_SUCCESS });
    yield history.push('/');
    yield toast.success({
      title: 'Password changed',
      message: 'Your password was changed successfully!',
    });
  } catch (error) {
    yield put({ type: types.RESET_FAILURE, error: getErrorMessage(error) });
  }
}

export default function* watchForgot() {
  yield takeLatest(types.RESET_REQUEST, resetSaga);
}
