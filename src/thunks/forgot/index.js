import axios from 'axios';
// import history from '../../router/history';
import { setAuthFetching, setAuthNotFetching, setAuthMessage } from '../../actions/auth';
import { FORGOT } from '../../api/auth';

export default params => (dispatch, getState) => {
  dispatch(setAuthFetching());
  return axios
    .post(FORGOT, params)
    .then(response => {
      dispatch(
        setAuthMessage('An email was sent to you with instructions to reset your password.'),
      );
    })
    .finally(() => {
      dispatch(setAuthNotFetching());
    });
};
