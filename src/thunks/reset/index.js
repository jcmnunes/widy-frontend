import axios from 'axios';
import history from '../../router/history';
import { authUser, setAuthError, setAuthFetching, setAuthNotFetching } from '../../actions/auth';
import { RESET } from '../../api/auth';
import toast from '../../helpers/toast';

export default params => (dispatch, getState) => {
  dispatch(setAuthFetching());
  return axios
    .post(RESET, params)
    .then(response => {
      dispatch(authUser());
      history.push('/');
      toast.success({
        title: 'Password changed',
        message: 'Your password was changed successfully!',
      });
    })
    .catch(error => {
      if (error.response && error.response.status === 400) {
        dispatch(setAuthError(error.response.data.message));
      }
    })
    .finally(() => {
      dispatch(setAuthNotFetching());
    });
};
