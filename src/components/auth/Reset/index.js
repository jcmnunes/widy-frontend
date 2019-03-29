import { connect } from 'react-redux';
import Reset from './Reset';
import { setAuthError } from '../../../actions/auth';
import resetThunk from '../../../thunks/reset';

export const mapStateToProps = state => ({
  fetching: state.auth.fetching,
  error: state.auth.error,
});

const mapDispatchToProps = { resetThunk, setAuthError };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reset);
