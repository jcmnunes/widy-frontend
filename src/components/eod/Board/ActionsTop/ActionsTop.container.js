import { connect } from 'react-redux';
import ActionsTop from './ActionsTop';
import logoutThunk from '../../../../thunks/logout';

const mapStateToProps = state => ({
  logout: state.auth.logout,
});

export default connect(
  mapStateToProps,
  { logoutThunk },
)(ActionsTop);
