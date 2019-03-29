import axios from 'axios';
import history from '../../router/history';
import { authUser, setAuthFetching, setAuthNotFetching, setAuthError } from '../../actions/auth';
import { LOGIN } from '../../api/auth';

export default params => (dispatch, getState) => {
  dispatch(setAuthFetching());
  return axios
    .post(LOGIN, params)
    .then(response => {
      dispatch(authUser());
      history.push('/');
    })
    .catch(error => {
      if (error.response && error.response.status === 400) {
        if (error.response.data) {
          dispatch(setAuthError(error.response.data));
        }
      } else {
        dispatch(setAuthError('Something went wrong'));
      }
    })
    .finally(() => {
      dispatch(setAuthNotFetching());
    });
};
