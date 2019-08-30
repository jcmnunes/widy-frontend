import { connect } from 'react-redux';
import DraggableTask from './DraggableTask';
import { handleTaskClick, handleTaskCompletedStateChange, handleTaskRename } from './Task.actions';

const mapStateToProps = (state, ownProps) => ({
  selectedTaskId: state.tasks.selected,
  activeTask: state.activeTask,
  isCompleted: state.tasks.byId[ownProps.taskId].completed,
  taskTitle: state.tasks.byId[ownProps.taskId].title,
});

const mapDispatchToProps = {
  handleTaskClick,
  handleTaskCompletedStateChange,
  handleTaskRename,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DraggableTask);
