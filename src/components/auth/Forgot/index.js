import { connect } from 'react-redux';
import Forgot from './Forgot';
import { setAuthMessage } from '../../../actions/auth';
import forgotThunk from '../../../thunks/forgot';

export const mapStateToProps = state => ({
  fetching: state.auth.fetching,
  message: state.auth.message,
});

const mapDispatchToProps = { setAuthMessage, forgotThunk };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Forgot);
