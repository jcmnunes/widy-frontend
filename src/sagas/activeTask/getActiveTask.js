import { call, put, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import { getActiveTask } from '../../api/tasks';
import * as types from '../../actions/activeTask/types';

export function* getActiveTaskSaga() {
  try {
    const {
      data: { activeTask },
    } = yield call(getActiveTask);

    yield put({ type: types.ACTIVE_TASK_SUCCESS, activeTask });
  } catch (error) {
    yield put({ type: types.ACTIVE_TASK_FAILURE, error });
  }
}

export default function* watchGetActiveTask() {
  yield takeLatest(types.ACTIVE_TASK_REQUEST, getActiveTaskSaga);
}
