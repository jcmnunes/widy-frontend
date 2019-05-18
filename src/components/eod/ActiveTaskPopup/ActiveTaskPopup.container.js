import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import ActiveTaskPopup from './ActiveTaskPopup';
import { getDay, storeSelectedDay } from '../../../actions/days';
import { stopTask, updateTask } from '../../../actions/tasks';

const mapStateToProps = state => ({
  activeTask: state.activeTask,
  selectedDayId: state.days.selected,
});

export default connect(
  mapStateToProps,
  { storeSelectedDay, getDay, stopTask, updateTask },
)(withTheme(ActiveTaskPopup));
