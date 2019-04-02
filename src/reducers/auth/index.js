import * as types from '../../actions/auth/types';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
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
    case types.INIT_REQUEST:
      return { ...state, init: { ...state.init, loading: true } };
    case types.INIT_SUCCESS:
      return { ...state, init: { ...state.init, loading: false }, authenticated: true };
    case types.INIT_FAILURE:
      return { ...state, init: { ...state.init, loading: false }, authenticated: false };
    case types.RESET_REQUEST:
      return { ...state, reset: { ...state.reset, loading: true } };
    case types.RESET_SUCCESS:
      return { ...state, reset: { ...state.reset, loading: false }, authenticated: true };
    case types.RESET_FAILURE:
      return { ...state, reset: { ...state.reset, loading: false, error: action.error } };
    default:
      return state;
  }
};
