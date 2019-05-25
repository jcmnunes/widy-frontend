import { connect } from 'react-redux';
import { withTheme } from 'styled-components/macro';
import ActionsTop from './ActionsTop';
import { logout } from '../../../../actions/auth';

const mapStateToProps = state => ({
  logoutState: state.auth.logout,
});

export default connect(
  mapStateToProps,
  { logout },
)(withTheme(ActionsTop));
