import { createSelector } from 'reselect';

const settingsSelector = state => state.settings;

// eslint-disable-next-line import/prefer-default-export
export const pomodoroSettingsSelector = createSelector(
  settingsSelector,
  ({ pomodoro }) => pomodoro.pomodoroSettings,
);
