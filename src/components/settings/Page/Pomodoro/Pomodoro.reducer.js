import {
  FETCH_POMODORO_SETTINGS_FAILURE,
  FETCH_POMODORO_SETTINGS_SUCCESS,
  RESET_STATE,
  SAVE_POMODORO_SETTINGS_FAILURE,
  SAVE_POMODORO_SETTINGS_REQUEST,
  SAVE_POMODORO_SETTINGS_SUCCESS,
} from './Pomodoro.actions';

const initialState = {
  isFetchingPomodoroSettings: true,
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
      };
    case SAVE_POMODORO_SETTINGS_FAILURE:
      return {
        ...state,
        isSavingPomodoroSettings: false,
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
