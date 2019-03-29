import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import auth from './auth';
import modals from './modals';
import days from './days/daysReducer';
import sections from './sections/sectionsReducer';
import tasks from './tasks/tasksReducer';

const rootReducer = combineReducers({
  auth,
  modals,
  days,
  sections,
  tasks,
  notifications,
});

export default rootReducer;
