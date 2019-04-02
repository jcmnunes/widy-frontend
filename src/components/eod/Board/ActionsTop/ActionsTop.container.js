import { connect } from 'react-redux';
import ActionsTop from './ActionsTop';
import { logout } from '../../../../actions/auth';

const mapStateToProps = state => ({
  logoutState: state.auth.logout,
});

export default connect(
  mapStateToProps,
  { logout },
)(ActionsTop);
