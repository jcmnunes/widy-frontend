import { all } from 'redux-saga/effects';
import fetchDay from './days/getDay';
import fetchDays from './days/getDays';
import createDay from './days/createDay';
import createTask from './tasks/createTask';
import updateTask from './tasks/updateTask';
import deleteTask from './tasks/deleteTask';
import moveTask from './tasks/moveTask';
import startTask from './tasks/startTask';
import stopTask from './tasks/stopTask';
import launchTask from './tasks/launchTask';
import getActiveTask from './activeTask/getActiveTask';
import login from '../components/auth/Login/Login.saga';
import logout from '../components/auth/Logout/Logout.saga';
import forgot from '../components/auth/Forgot/Forgot.sagas';
import reset from '../components/auth/Reset/Reset.saga';
import init from '../components/auth/Init/Init.saga';
import {
  watchFetchPomodoroSettingsSaga as fetchPomodoroSettingsSaga,
  watchSavePomodoroSettingsSaga as savePomodoroSettingsSaga,
} from '../components/settings/Page/Pomodoro/Pomodoro.actions';

export default function* rootSaga() {
  yield all([
    fetchDays(),
    fetchDay(),
    createDay(),
    createTask(),
    updateTask(),
    moveTask(),
    deleteTask(),
    startTask(),
    stopTask(),
    launchTask(),
    getActiveTask(),
    login(),
    logout(),
    forgot(),
    reset(),
    init(),
    fetchPomodoroSettingsSaga(),
    savePomodoroSettingsSaga(),
  ]);
}
