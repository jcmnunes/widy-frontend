import { INIT_FAILURE, INIT_REQUEST, INIT_SUCCESS } from './Init.types';

export const initRequest = () => ({
  type: INIT_REQUEST,
});

export const initSuccess = () => ({
  type: INIT_SUCCESS,
});

export const initFailure = () => ({
  type: INIT_FAILURE,
});
