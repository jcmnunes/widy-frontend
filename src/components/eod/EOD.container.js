import { connect } from 'react-redux';
import EOD from './EOD';
import { updateActiveTask } from '../../actions/activeTask';

const mapStateToProps = state => ({
  activeTaskId: state.activeTask.taskId,
  activeTaskTime: state.activeTask.time,
  activeTaskStart: state.activeTask.start,
  inBreak: state.activeTask.inBreak,
});

export default connect(
  mapStateToProps,
  { updateActiveTask },
)(EOD);
