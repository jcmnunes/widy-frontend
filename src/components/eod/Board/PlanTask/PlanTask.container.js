import { connect } from 'react-redux';
import PlanTask from './PlanTask';
import { openSidebar } from '../../../../actions/sidebar';
import { openModal } from '../../../../actions/modals';
import { storeSelectedSectionId } from '../../../../actions/sections';
import { storeSelectedTaskId } from '../../../../actions/tasks';

const mapStateToProps = (state, ownProps) => ({
  selectedTaskId: state.tasks.selected,
  taskTitle: state.tasks.byId[ownProps.taskId].title,
});

export default connect(
  mapStateToProps,
  { openSidebar, openModal, storeSelectedTaskId, storeSelectedSectionId },
)(PlanTask);
