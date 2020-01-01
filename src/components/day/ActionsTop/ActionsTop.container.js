import { connect } from 'react-redux';
import ActionsTop from './ActionsTop';
import { isLoadingSelector as isLogoutLoadingSelector } from '../../auth/Logout/Logout.selectors';
import { logoutRequest } from '../../auth/Logout/Logout.actions';
import { selectedDayIdSelector } from '../../../selectors/days/daysSelectors';

const mapStateToProps = state => ({
  selectedDayId: selectedDayIdSelector(state),
  isLogoutLoading: isLogoutLoadingSelector(state),
});

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionsTop);
