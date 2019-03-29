import * as types from './types';

export const storeDays = days => ({
  type: types.STORE_DAYS,
  payload: days,
});

export const storeSelectedDay = id => ({
  type: types.STORE_SELECTED_DAY,
  payload: id,
});

export const getDays = () => ({
  type: types.GET_DAYS_REQUEST,
});

export const getDay = id => ({
  type: types.GET_DAY_REQUEST,
  payload: id,
});

export const createDay = () => ({
  type: types.CREATE_DAY_REQUEST,
});
