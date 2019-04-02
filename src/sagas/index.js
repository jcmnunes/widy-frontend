import { all } from 'redux-saga/effects';
import fetchDay from './days/getDay';
import fetchDays from './days/getDays';
import createDay from './days/createDay';
import createTask from './tasks/createTask';
import login from './auth/login';
import logout from './auth/logout';
import forgot from './auth/forgot';
import init from './auth/init';

export default function* rootSaga() {
  yield all([
    fetchDays(),
    fetchDay(),
    createDay(),
    createTask(),
    login(),
    logout(),
    forgot(),
    init(),
  ]);
}
