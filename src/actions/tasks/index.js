import * as types from './types';

export const storeCreateTaskData = (dayId, sectionId) => ({
  type: types.STORE_CREATE_TASK_DATA,
  dayId,
  sectionId,
});

export const startCreateTaskRequest = title => ({
  type: types.CREATE_TASK_REQUEST,
  title,
});

export const storeSelectedTaskId = taskId => ({
  type: types.STORE_SELECTED_TASK_ID,
  taskId,
});
