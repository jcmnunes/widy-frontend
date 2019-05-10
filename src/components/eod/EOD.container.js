import { connect } from 'react-redux';
import EOD from './EOD';
import { updateActiveTask } from '../../actions/activeTask';

const mapStateToProps = state => ({
  activeTaskId: state.activeTask.taskId,
  activeTaskTitle: state.activeTask.title,
  activeTaskTime: state.activeTask.time,
  activeTaskStart: state.activeTask.start,
  daysOrder: state.days.order,
  daysLoading: state.days.loading,
});

export default connect(
  mapStateToProps,
  { updateActiveTask },
)(EOD);
