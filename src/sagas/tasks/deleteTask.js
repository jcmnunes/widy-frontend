import { call, put, takeLatest, select } from 'redux-saga/effects';
import { deleteTask } from '../../api/tasks';
import * as tasksTypes from '../../actions/tasks/types';
import * as sectionsTypes from '../../actions/sections/types';
// eslint-disable-next-line import/no-cycle
import toast from '../../helpers/toast';

const getDayId = state => state.days.selected;
const getSectionId = state => state.sections.selected;
const getSectionsById = state => state.sections.byId;
// const getTasksById = state => state.tasks.byId;

export function* deleteTaskSaga(action) {
  const { taskId } = action;
  const dayId = yield select(getDayId);
  const sectionId = yield select(getSectionId);
  const sectionsById = yield select(getSectionsById);
  // const tasksById = yield select(getTasksById);

  const taskIndex = sectionsById[sectionId].tasks.indexOf(taskId);
  // const selectedTask = tasksById[action.taskId];

  try {
    const params = { dayId, sectionId };
    yield put({ type: sectionsTypes.REMOVE_TASK, sectionId, index: taskIndex });
    yield put({ type: tasksTypes.STORE_SELECTED_TASK_ID, taskId: '' });
    yield call(deleteTask, taskId, params);
  } catch (error) {
    yield toast.error({
      title: 'Could not delete the task',
      message: 'Something went wrong while deleting the task.',
    });
    // TODO ➜ Remove and add task from tasksById
    yield put({ type: sectionsTypes.ADD_TASK_AT_INDEX, sectionId, index: taskIndex, taskId });
  }
}

export default function* watchDeleteTask() {
  yield takeLatest(tasksTypes.DELETE_TASK_REQUEST, deleteTaskSaga);
}
