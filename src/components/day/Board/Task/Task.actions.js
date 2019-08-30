import { storeSelectedSectionId } from '../../../../actions/sections';
import { stopTask, storeSelectedTaskId, updateTask } from '../../../../actions/tasks';
import { openModal } from '../../../../actions/modals';
import { RENAME_TASK } from '../../../modals/types';

export const handleTaskClick = dispatch => (sectionId, taskId) => () => {
  dispatch(storeSelectedSectionId(sectionId));
  dispatch(storeSelectedTaskId(taskId));
};

export const handleTaskRename = dispatch => () => {
  dispatch(openModal(RENAME_TASK));
};

export const handleTaskCompletedStateChange = dispatch => (
  isTaskActive,
  sectionId,
  taskId,
  isCompleted,
) => () => {
  if (isTaskActive) {
    dispatch(stopTask(taskId, sectionId));
  }
  dispatch(updateTask(taskId, { completed: !isCompleted, start: null }));
};
