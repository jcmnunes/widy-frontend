import { connect } from 'react-redux';
import DraggableTask from './DraggableTask';
import { handleTaskClick, handleTaskCompletedStateChange, handleTaskRename } from './Task.actions';
import { scopesSelector } from '../../../../selectors/scopes/scopesSelectors';
import { findScopeCode } from '../../../../helpers/scopes';

const mapStateToProps = (state, ownProps) => {
  const task = state.tasks.byId[ownProps.taskId];
  const scopes = scopesSelector(state);

  return {
    selectedTaskId: state.tasks.selected,
    activeTask: state.activeTask,
    isCompleted: task ? task.completed : false,
    taskTitle: task ? task.title : '',
    scopeCode: findScopeCode(task.scopeId, scopes),
  };
};

const mapDispatchToProps = {
  handleTaskClick,
  handleTaskCompletedStateChange,
  handleTaskRename,
};

export default connect(mapStateToProps, mapDispatchToProps)(DraggableTask);
