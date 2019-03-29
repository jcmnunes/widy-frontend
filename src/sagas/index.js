import { all } from 'redux-saga/effects';
import fetchDay from './days/getDay';
import fetchDays from './days/getDays';
import createDay from './days/createDay';
import createTask from './tasks/createTask';

export default function* rootSaga() {
  yield all([fetchDays(), fetchDay(), createDay(), createTask()]);
}
