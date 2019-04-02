import * as types from './types';

export const login = params => ({
  type: types.LOGIN_REQUEST,
  params,
});

export const logout = () => ({
  type: types.LOGOUT_REQUEST,
});

export const forgot = params => ({
  type: types.FORGOT_REQUEST,
  params,
});

export const reset = params => ({
  type: types.RESET_REQUEST,
  params,
});

export const resetLoginError = () => ({
  type: types.RESET_LOGIN_ERROR,
});

export const resetForgotMessage = () => ({
  type: types.RESET_FORGOT_MESSAGE,
});

export const resetResetError = () => ({
  type: types.RESET_RESET_ERROR,
});
