import { connect } from 'react-redux';
import ActiveTaskPopup from './ActiveTaskPopup';
import { getDay, storeSelectedDay } from '../../../actions/days';

const mapStateToProps = state => ({
  activeTask: state.activeTask,
  selectedDayId: state.days.selected,
});

export default connect(
  mapStateToProps,
  { storeSelectedDay, getDay },
)(ActiveTaskPopup);
