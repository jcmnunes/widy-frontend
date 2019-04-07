import { call, put, takeLatest, select } from 'redux-saga/effects';
import { updateTask } from '../../api/tasks';
import * as types from '../../actions/tasks/types';
import toast from '../../helpers/toast';

const getDayId = state => state.days.selected;
const getSectionId = state => state.sections.selected;
const getTaskId = state => state.tasks.selected;
const getTasksById = state => state.tasks.byId;

export function* updateTaskSaga(action) {
  const dayId = yield select(getDayId);
  const sectionId = yield select(getSectionId);
  const taskId = yield select(getTaskId);
  const taskById = yield select(getTasksById);
  const selectedTask = taskById[taskId];

  try {
    const params = { dayId, sectionId, payload: action.payload };
    yield put({ type: types.UPDATE_TASK_SUCCESS, taskId, payload: params.payload });
    yield call(updateTask, action.taskId, params);
  } catch (error) {
    yield toast.error({
      title: 'Could not update the task',
      message: 'Something went wrong while updating the task.',
    });
    yield put({ type: types.UPDATE_TASK_FAILURE, error, taskId, payload: selectedTask });
  }
}

export default function* watchCreateTask() {
  yield takeLatest(types.UPDATE_TASK_REQUEST, updateTaskSaga);
}
