import {
  FETCH_POMODORO_SETTINGS_FAILURE,
  FETCH_POMODORO_SETTINGS_SUCCESS,
  RESET_STATE,
  SAVE_POMODORO_SETTINGS_FAILURE,
  SAVE_POMODORO_SETTINGS_REQUEST,
  SAVE_POMODORO_SETTINGS_SUCCESS,
} from './Pomodoro.actions';
import { INIT_SUCCESS } from '../../../auth/Init/Init.types';

const initialState = {
  isFetchingPomodoroSettings: false,
  isSavingPomodoroSettings: false,
  pomodoroSettings: {
    pomodoroLength: null,
    shortBreak: null,
    longBreak: null,
    longBreakAfter: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        pomodoroSettings: action.user.settings.pomodoro,
      };
    case FETCH_POMODORO_SETTINGS_SUCCESS:
      return {
        ...state,
        isFetchingPomodoroSettings: false,
        pomodoroSettings: action.data,
      };
    case FETCH_POMODORO_SETTINGS_FAILURE:
      return {
        ...state,
        isFetchingPomodoroSettings: false,
      };
    case SAVE_POMODORO_SETTINGS_REQUEST:
      return {
        ...state,
        isSavingPomodoroSettings: true,
      };
    case SAVE_POMODORO_SETTINGS_SUCCESS:
      return {
        ...state,
        isSavingPomodoroSettings: false,
        pomodoroSettings: action.pomodoroSettings,
      };
    case SAVE_POMODORO_SETTINGS_FAILURE:
      return {
        ...state,
        isSavingPomodoroSettings: false,
      };
    case RESET_STATE:
      return {
        ...state,
        isFetchingPomodoroSettings: false,
        isSavingPomodoroSettings: false,
      };
    default:
      return state;
  }
};
