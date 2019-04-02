import { connect } from 'react-redux';
import Reset from './Reset';
import { reset, resetResetError } from '../../../actions/auth';

export const mapStateToProps = state => ({
  loading: state.auth.reset.loading,
  error: state.auth.reset.error,
});

const mapDispatchToProps = { reset, resetResetError };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reset);
