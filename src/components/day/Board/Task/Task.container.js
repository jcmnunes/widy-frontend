import { connect } from 'react-redux';
import DraggableTask from './DraggableTask';
import { handleTaskClick, handleTaskCompletedStateChange, handleTaskRename } from './Task.actions';

const mapStateToProps = (state, ownProps) => ({
  selectedTaskId: state.tasks.selected,
  activeTask: state.activeTask,
  isCompleted: state.tasks.byId[ownProps.taskId].completed,
  taskTitle: state.tasks.byId[ownProps.taskId].title,
});

const mapDispatchToProps = dispatch => ({
  handleTaskClick: handleTaskClick(dispatch),
  handleTaskRename: handleTaskRename(dispatch),
  handleTaskCompletedStateChange: handleTaskCompletedStateChange(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DraggableTask);
