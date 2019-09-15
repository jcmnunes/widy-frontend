import { connect } from 'react-redux';
import DraggableTask from './DraggableTask';
import { handleTaskClick, handleTaskCompletedStateChange, handleTaskRename } from './Task.actions';

const mapStateToProps = (state, ownProps) => {
  const task = state.tasks.byId[ownProps.taskId];

  return {
    selectedTaskId: state.tasks.selected,
    activeTask: state.activeTask,
    isCompleted: task ? task.completed : false,
    taskTitle: task ? task.title : '',
  };
};

const mapDispatchToProps = {
  handleTaskClick,
  handleTaskCompletedStateChange,
  handleTaskRename,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DraggableTask);
