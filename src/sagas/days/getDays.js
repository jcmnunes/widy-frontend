import { call, put, takeLatest } from 'redux-saga/effects';
import { getDays } from '../../api/days';
import * as types from '../../actions/days/types';
import { loadItem } from '../../helpers/localStorage';

const normalize = data => {
  const normalized = {
    byId: {},
    order: [],
  };
  data.forEach(({ day, _id: id }) => {
    normalized.byId[id] = { id, day };
    normalized.order.push(id);
  });

  return normalized;
};

export function* getDaysSaga() {
  try {
    const { data } = yield call(getDays);
    const { byId, order } = normalize(data);

    const selectedDayId = loadItem('selectedDayId') || order[0];
    yield put({ type: types.GET_DAYS_SUCCESS, byId, order, selectedDayId });
    yield put({ type: types.GET_DAY_REQUEST, payload: selectedDayId });
  } catch (error) {
    yield put({ type: types.GET_DAYS_FAILURE, error });
  }
}

export default function* watchGetDays() {
  yield takeLatest(types.GET_DAYS_REQUEST, getDaysSaga);
}
