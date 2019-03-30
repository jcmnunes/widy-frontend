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
    default:
      return state;
  }
};
