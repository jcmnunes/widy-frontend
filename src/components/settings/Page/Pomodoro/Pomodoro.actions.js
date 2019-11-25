import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Toaster } from '@binarycapsule/ui-capsules';

export const fetchPomodoroSettingsApi = () => axios.get('/api/settings/pomodoro');
export const savePomodoroSettingsApi = params => axios.put('/api/settings/pomodoro', params);

export const FETCH_POMODORO_SETTINGS_REQUEST = 'settings/pomodoro/FETCH_POMODORO_SETTINGS_REQUEST';
export const FETCH_POMODORO_SETTINGS_SUCCESS = 'settings/pomodoro/FETCH_POMODORO_SETTINGS_SUCCESS';
export const FETCH_POMODORO_SETTINGS_FAILURE = 'settings/pomodoro/FETCH_POMODORO_SETTINGS_FAILURE';

export const SAVE_POMODORO_SETTINGS_REQUEST = 'settings/pomodoro/SAVE_POMODORO_SETTINGS_REQUEST';
export const SAVE_POMODORO_SETTINGS_SUCCESS = 'settings/pomodoro/SAVE_POMODORO_SETTINGS_SUCCESS';
export const SAVE_POMODORO_SETTINGS_FAILURE = 'settings/pomodoro/SAVE_POMODORO_SETTINGS_FAILURE';

export const RESET_STATE = 'settings/pomodoro/RESET_STATE';

export const fetchPomodoroSettings = () => ({
  type: FETCH_POMODORO_SETTINGS_REQUEST,
});

export const resetState = () => ({
  type: RESET_STATE,
});

export const savePomodoroSettings = (values, initialValues, helpers) => ({
  type: SAVE_POMODORO_SETTINGS_REQUEST,
  values,
  initialValues,
  helpers,
});

export function* fetchPomodoroSettingsSaga() {
  try {
    const { data } = yield call(fetchPomodoroSettingsApi);

    yield put({ type: FETCH_POMODORO_SETTINGS_SUCCESS, data });
  } catch (error) {
    yield put({ type: FETCH_POMODORO_SETTINGS_FAILURE });
  }
}

export function* savePomodoroSettingsSaga(action) {
  try {
    const params = { pomodoroSettings: action.values };
    yield call(() => savePomodoroSettingsApi(params));
    yield put({ type: SAVE_POMODORO_SETTINGS_SUCCESS });
    action.helpers.resetForm({ values: { ...action.values } });
  } catch (error) {
    yield put({ type: SAVE_POMODORO_SETTINGS_FAILURE });
    action.helpers.resetForm({ values: { ...action.initialValues } });
    Toaster.error({
      title: 'Something went wrong',
      message: 'Settings could not be saved',
    });
  }
}

export function* watchFetchPomodoroSettingsSaga() {
  yield takeLatest(FETCH_POMODORO_SETTINGS_REQUEST, fetchPomodoroSettingsSaga);
}

export function* watchSavePomodoroSettingsSaga() {
  yield takeLatest(SAVE_POMODORO_SETTINGS_REQUEST, savePomodoroSettingsSaga);
}
