import { connect } from 'react-redux';
import Login from './Login';
import { login, resetLoginError } from '../../../actions/auth';

export const mapStateToProps = state => ({
  loading: state.auth.login.loading,
  error: state.auth.login.error,
});

export default connect(
  mapStateToProps,
  { login, resetLoginError },
)(Login);
