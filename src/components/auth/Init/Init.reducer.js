import { INIT_FAILURE, INIT_REQUEST, INIT_SUCCESS } from './Init.types';
import { LOGOUT_SUCCESS } from '../Logout/Logout.types';

const initialState = {
  loading: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_REQUEST:
      return { ...state, loading: true };
    case INIT_SUCCESS:
      return { ...state, loading: false };
    case INIT_FAILURE:
      return { ...state, loading: false };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
