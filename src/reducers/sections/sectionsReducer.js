import * as types from '../../actions/sections/types';
import * as daysTypes from '../../actions/days/types';
import * as tasksTypes from '../../actions/tasks/types';
import initialState from './initialState';
import { move, insert, remove } from '../../helpers/arrayHelpers';

const addTaskToSection = (sectionId, taskId, state) => ({
  ...state.byId,
  [sectionId]: {
    ...state.byId[sectionId],
    tasks: [...state.byId[sectionId].tasks, taskId],
  },
});

export default (state = initialState, action) => {
  switch (action.type) {
    case daysTypes.GET_DAY_REQUEST:
      return { ...state, loading: true };
    case daysTypes.GET_DAY_SUCCESS:
      return { ...state, loading: false, ...action.sections };
    case tasksTypes.CREATE_TASK_SUCCESS:
      return {
        ...state,
        byId: addTaskToSection(action.payload.sectionId, action.payload.task.id, state),
      };
    case types.STORE_SELECTED_SECTION_ID:
      return {
        ...state,
        selected: action.sectionId,
      };
    case types.REORDER_TASKS_ARRAY:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.sectionId]: {
            ...state.byId[action.sectionId],
            tasks: move(state.byId[action.sectionId].tasks, action.fromIndex, action.toIndex),
          },
        },
      };
    case types.REMOVE_TASK:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.sectionId]: {
            ...state.byId[action.sectionId],
            tasks: remove(state.byId[action.sectionId].tasks, action.index),
          },
        },
      };
    case types.ADD_TASK_AT_INDEX:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.sectionId]: {
            ...state.byId[action.sectionId],
            tasks: insert(state.byId[action.sectionId].tasks, action.index, action.taskId),
          },
        },
      };
    default:
      return state;
  }
};
