import * as types from '../../actions/days/types';
import * as tasksTypes from '../../actions/tasks/types';
import initialState from './initialState';

const addTaskToSection = (sectionId, taskId, state) => ({
  ...state.byId,
  [sectionId]: {
    ...state.byId[sectionId],
    tasks: [...state.byId[sectionId].tasks, taskId],
  },
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DAY_REQUEST:
      return { ...state, loading: true };
    case types.GET_DAY_SUCCESS:
      return { ...state, loading: false, ...action.sections };
    case tasksTypes.CREATE_TASK_SUCCESS:
      return {
        ...state,
        byId: addTaskToSection(action.payload.sectionId, action.payload.task._id, state),
      };
    default:
      return state;
  }
};
