/* eslint-disable max-len */
import axios from 'axios';
import history from '../../router/history';
import { unauthUser } from '../../actions/auth';
import { LOGOUT } from '../../api/auth';

export default params => (dispatch, getState) => {
  return axios.get(LOGOUT).then(response => {
    dispatch(unauthUser());
    history.push('/login');
  });
};
