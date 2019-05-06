import { connect } from 'react-redux';
import DraggableTask from './DraggableTask';
import { openSidebar } from '../../../../actions/sidebar';
import { storeSelectedSectionId } from '../../../../actions/sections';
import { stopTask, storeSelectedTaskId, updateTask } from '../../../../actions/tasks';
import { openModal } from '../../../../actions/modals';

const mapStateToProps = (state, ownProps) => ({
  selectedTaskId: state.tasks.selected,
  activeTask: state.activeTask,
  isCompleted: state.tasks.byId[ownProps.taskId].completed,
});

export default connect(
  mapStateToProps,
  { openSidebar, storeSelectedTaskId, storeSelectedSectionId, openModal, updateTask, stopTask },
)(DraggableTask);
