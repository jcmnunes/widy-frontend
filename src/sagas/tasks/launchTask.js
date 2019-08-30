import { takeLatest } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import { moveTaskSaga } from './moveTask';
import { startTaskSaga } from './startTask';
import * as types from '../../actions/tasks/types';

export function* launchTaskSaga(action) {
  const moveTaskParams = {
    taskId: action.taskId,
    fromSectionId: action.fromSectionId,
    toSectionId: action.toSectionId,
    fromIndex: action.fromIndex,
    toIndex: action.toIndex,
  };
  const startTaskParams = {
    taskId: action.taskId,
    sectionId: action.toSectionId,
    taskTitle: action.taskTitle,
    taskTime: action.taskTime,
  };
  yield* moveTaskSaga(moveTaskParams);
  yield* startTaskSaga(startTaskParams);
}

export default function* watchLaunchTask() {
  yield takeLatest(types.LAUNCH_TASK_REQUEST, launchTaskSaga);
}
