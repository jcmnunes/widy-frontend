import moment from 'moment';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { stopTask } from '../../api/tasks';
import * as types from '../../actions/tasks/types';
import { storeActiveTask } from '../../actions/activeTask';

const getDayId = state => state.days.selected;
const getTask = state => state.tasks.byId[state.activeTask.taskId];

export function* startTaskSaga(action) {
  const dayId = yield select(getDayId);
  const { time, start } = yield select(getTask);

  try {
    const newTime = time + moment().diff(start, 'seconds');

    yield put({
      type: types.UPDATE_TASK_SUCCESS,
      taskId: action.taskId,
      payload: { start: null, time: newTime },
    });
    const activeTask = {
      taskId: '',
      sectionId: '',
      dayId: '',
      inBreak: false,
      time: 0,
      start: null,
      title: '',
    };
    yield put(storeActiveTask(activeTask));

    const params = {
      dayId,
      sectionId: action.sectionId,
      time: newTime,
    };

    yield call(stopTask, action.taskId, params);
  } catch (error) {
    yield put({ type: types.CREATE_TASK_FAILURE, error });
  }
}

export default function* watchStartTask() {
  yield takeLatest(types.STOP_TASK_REQUEST, startTaskSaga);
}
