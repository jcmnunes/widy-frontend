import { connect } from 'react-redux';
import Logout from './Logout.component';
import { loadingSelector } from './Logout.selectors';
import { logoutRequest } from './Logout.actions';

export const mapStateToProps = state => ({
  loading: loadingSelector(state),
});

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logout);
