import { connect } from 'react-redux';
import ActionsTop from './ActionsTop';
import { isLoadingSelector as isLogoutLoadingSelector } from '../../auth/Logout/Logout.selectors';
import { logoutRequest } from '../../auth/Logout/Logout.actions';

const mapStateToProps = state => ({
  isLogoutLoading: isLogoutLoadingSelector(state),
});

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActionsTop);
