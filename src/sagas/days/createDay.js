import { call, put, takeLatest } from 'redux-saga/effects';
import { createDay } from '../../api/days';
import * as types from '../../actions/days/types';

export function* createDaySaga(action) {
  try {
    const {
      data: { day },
    } = yield call(createDay, action.payload);

    yield put({ type: types.CREATE_DAY_SUCCESS, day });
    yield put({ type: types.GET_DAY_REQUEST, payload: day._id });
  } catch (error) {
    console.error('error', error);
    yield put({ type: types.CREATE_DAY_FAILURE, error });
  }
}

export default function* watchCreateDay() {
  yield takeLatest(types.CREATE_DAY_REQUEST, createDaySaga);
}
