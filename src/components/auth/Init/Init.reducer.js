import { INIT_FAILURE, INIT_REQUEST, INIT_SUCCESS } from './Init.types';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_REQUEST:
      return { ...state, loading: true };
    case INIT_SUCCESS:
      return { ...state, loading: false };
    case INIT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
