import * as types from '../../actions/tasks/types';
import * as daysTypes from '../../actions/days/types';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case daysTypes.GET_DAY_SUCCESS:
      return {
        ...state,
        ...action.tasks,
      };
    case types.STORE_CREATE_TASK_DATA:
      return {
        ...state,
        createTask: {
          ...state.createTask,
          dayId: action.dayId,
          sectionId: action.sectionId,
        },
      };
    case types.CREATE_TASK_REQUEST:
      return {
        ...state,
        createTask: {
          ...state.createTask,
          loading: true,
        },
      };
    case types.CREATE_TASK_SUCCESS:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.task._id]: action.payload.task,
        },
        createTask: {
          ...state.createTask,
          loading: false,
        },
      };
    case types.STORE_SELECTED_TASK_ID:
      return {
        ...state,
        selectedTaskId: action.taskId,
      };
    default:
      return state;
  }
};
