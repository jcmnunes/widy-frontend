import { connect } from 'react-redux';
import DraggableTask from './DraggableTask';
import { storeSelectedSectionId } from '../../../../actions/sections';
import { stopTask, storeSelectedTaskId, updateTask } from '../../../../actions/tasks';
import { openModal } from '../../../../actions/modals';

const mapStateToProps = (state, ownProps) => ({
  selectedTaskId: state.tasks.selected,
  activeTask: state.activeTask,
  isCompleted: state.tasks.byId[ownProps.taskId].completed,
  taskTitle: state.tasks.byId[ownProps.taskId].title,
});

export default connect(
  mapStateToProps,
  { storeSelectedTaskId, storeSelectedSectionId, openModal, updateTask, stopTask },
)(DraggableTask);
