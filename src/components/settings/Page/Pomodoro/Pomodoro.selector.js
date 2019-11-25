import { createSelector } from 'reselect';

const fullPomodoroSettingsSelector = state => state.settings.pomodoro;

export const pomodoroSettingsSelector = createSelector(
  fullPomodoroSettingsSelector,
  ({ pomodoroSettings }) => pomodoroSettings,
);

export const isFetchingPomodoroSettingsSelector = createSelector(
  fullPomodoroSettingsSelector,
  ({ isFetchingPomodoroSettings }) => isFetchingPomodoroSettings,
);

export const isSavingPomodoroSettingsSelector = createSelector(
  fullPomodoroSettingsSelector,
  ({ isSavingPomodoroSettings }) => isSavingPomodoroSettings,
);
