export const STORE_CREATE_TASK_DATA = 'tasks/STORE_CREATE_TASK_DATA';
export const CREATE_TASK_REQUEST = 'tasks/CREATE_TASK_REQUEST';
export const CREATE_TASK_SUCCESS = 'tasks/CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILURE = 'tasks/CREATE_TASK_FAILURE';

export const storeCreateTaskData = (dayId, sectionId) => ({
  type: STORE_CREATE_TASK_DATA,
  dayId,
  sectionId,
});

export const startCreateTaskRequest = title => ({
  type: CREATE_TASK_REQUEST,
  title,
});
