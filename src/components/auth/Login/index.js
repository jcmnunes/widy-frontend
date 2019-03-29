import { connect } from 'react-redux';
import Login from './Login';
import { setAuthError } from '../../../actions/auth';
import loginThunk from '../../../thunks/login';

export const mapStateToProps = state => ({
  fetching: state.auth.fetching,
  error: state.auth.error,
});

const mapDispatchToProps = { loginThunk, setAuthError };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
