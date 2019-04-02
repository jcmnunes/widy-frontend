import axios from 'axios';
import history from '../../router/history';
import { LOGOUT } from '../../api/auth';
import * as types from '../../actions/auth/types';

export default () => dispatch => {
  dispatch({ type: types.LOGOUT_REQUEST });
  return axios
    .get(LOGOUT)
    .then(() => {
      dispatch({ type: types.LOGOUT_SUCCESS });
      history.push('/login');
    })
    .catch(error => {
      dispatch({ type: types.LOGOUT_FAILURE, error });
    });
};
