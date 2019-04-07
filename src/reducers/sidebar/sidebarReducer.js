import * as types from '../../actions/sidebar/types';
import * as daysTypes from '../../actions/days/types';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_SIDEBAR:
      return { ...state, isOpen: true };
    case types.CLOSE_SIDEBAR:
      return { ...state, isOpen: false };
    case daysTypes.STORE_SELECTED_DAY:
      return { ...state, isOpen: false };
    default:
      return state;
  }
};
