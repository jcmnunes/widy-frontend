import { connect } from 'react-redux';
import Forgot from './Forgot';
import { forgot, resetForgotMessage } from '../../../actions/auth';

export const mapStateToProps = state => ({
  loading: state.auth.forgot.loading,
  message: state.auth.forgot.message,
});

export default connect(
  mapStateToProps,
  { forgot, resetForgotMessage },
)(Forgot);
