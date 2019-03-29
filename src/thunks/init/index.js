import axios from 'axios';
import { authUser, unauthUser, setAuthLoading, setAuthNotLoading } from '../../actions/auth';
import { CHECK } from '../../api/auth';

export default params => (dispatch, getState) => {
  dispatch(setAuthLoading());
  return axios
    .get(CHECK)
    .then(response => {
      dispatch(authUser());
    })
    .catch(error => {
      if (error.response && error.response.status === 401) {
        dispatch(unauthUser());
      }
    })
    .finally(() => {
      dispatch(setAuthNotLoading());
    });
};
