import { call, put, takeLatest, select } from 'redux-saga/effects';
import { createTask } from '../../api/tasks';
import * as types from '../../actions/tasks';
import * as modalTypes from '../../actions/modals/types';

const getDayId = state => state.tasks.createTask.dayId;
const getSectionId = state => state.tasks.createTask.sectionId;

export function* createTaskSaga(action) {
  try {
    const dayId = yield select(getDayId);
    const sectionId = yield select(getSectionId);
    const params = {
      title: action.title,
      dayId,
      sectionId,
    };
    const { data } = yield call(createTask, params);
    yield put({
      type: types.CREATE_TASK_SUCCESS,
      payload: {
        dayId,
        sectionId,
        task: data.task,
      },
    });
    yield put({
      type: modalTypes.CLOSE_MODAL,
    });
  } catch (error) {
    yield put({ type: types.CREATE_TASK_FAILURE, error });
  }
}

export default function* watchCreateTask() {
  yield takeLatest(types.CREATE_TASK_REQUEST, createTaskSaga);
}
