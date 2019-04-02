import {
  SET_AUTH_LOADING,
  SET_AUTH_NOT_LOADING,
  SET_AUTH_FETCHING,
  SET_AUTH_NOT_FETCHING,
  AUTH_USER,
  UNAUTH_USER,
  SET_AUTH_ERROR,
  SET_AUTH_MESSAGE,
} from '../../actions/auth';
import * as types from '../../actions/auth/types';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_LOADING:
      return { ...state, loading: true };
    case SET_AUTH_NOT_LOADING:
      return { ...state, loading: false };
    case SET_AUTH_FETCHING:
      return { ...state, fetching: true };
    case SET_AUTH_NOT_FETCHING:
      return { ...state, fetching: false };
    case AUTH_USER:
      return { ...state, authenticated: true };
    case SET_AUTH_ERROR:
      return { ...state, error: action.payload };
    case SET_AUTH_MESSAGE:
      return { ...state, message: action.payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case types.LOGIN_REQUEST:
      return { ...state, login: { ...state.login, loading: true } };
    case types.LOGIN_SUCCESS:
      return { ...state, login: { ...state.login, loading: false }, authenticated: true };
    case types.LOGIN_FAILURE:
      return { ...state, login: { ...state.login, loading: false, error: action.error } };
    case types.RESET_LOGIN_ERROR:
      return { ...state, login: { ...state.login, error: '' } };
    case types.LOGOUT_REQUEST:
      return { ...state, logout: { ...state.logout, loading: true } };
    case types.LOGOUT_SUCCESS:
      return { ...state, logout: { ...state.logout, loading: false }, authenticated: false };
    case types.LOGOUT_FAILURE:
      return { ...state, logout: { ...state.logout, loading: false, error: action.error } };
    case types.FORGOT_REQUEST:
      return { ...state, forgot: { ...state.forgot, loading: true } };
    case types.FORGOT_SUCCESS:
      return { ...state, forgot: { ...state.forgot, loading: false, message: action.message } };
    case types.FORGOT_FAILURE:
      return { ...state, forgot: { ...state.forgot, loading: false, error: action.error } };
    case types.RESET_FORGOT_MESSAGE:
      return { ...state, forgot: { ...state.forgot, message: '' } };
    default:
      return state;
  }
};
