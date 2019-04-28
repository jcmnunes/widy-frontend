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
import login from './auth/login';
import logout from './auth/logout';
import forgot from './auth/forgot';
import reset from './auth/reset';
import init from './auth/init';

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
  ]);
}
