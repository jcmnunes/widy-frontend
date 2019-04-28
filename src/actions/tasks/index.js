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

export const updateTask = (taskId, payload) => ({
  type: types.UPDATE_TASK_REQUEST,
  taskId,
  payload,
});

export const moveTask = (taskId, fromSectionId, toSectionId, fromIndex, toIndex) => ({
  type: types.MOVE_TASK_REQUEST,
  taskId,
  fromSectionId,
  toSectionId,
  fromIndex,
  toIndex,
});

export const deleteTask = taskId => ({
  type: types.DELETE_TASK_REQUEST,
  taskId,
});

export const startTask = (taskId, taskTitle, taskTime, sectionId) => ({
  type: types.START_TASK_REQUEST,
  taskId,
  taskTitle,
  taskTime,
  sectionId,
});

export const stopTask = (taskId, sectionId) => ({
  type: types.STOP_TASK_REQUEST,
  taskId,
  sectionId,
});
