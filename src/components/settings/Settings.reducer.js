import { combineReducers } from 'redux';
import pomodoro from './Page/Pomodoro/Pomodoro.reducer';

const settingsReducer = combineReducers({
  pomodoro,
});

export default settingsReducer;
