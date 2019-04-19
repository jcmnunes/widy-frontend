import { connect } from 'react-redux';
import PlanTask from './PlanTask';
import { openSidebar } from '../../../../actions/sidebar';
import { openModal } from '../../../../actions/modals';
import { storeSelectedSectionId } from '../../../../actions/sections';
import { deleteTask, storeSelectedTaskId } from '../../../../actions/tasks';

const mapStateToProps = state => ({
  selectedTaskId: state.tasks.selected,
});

export default connect(
  mapStateToProps,
  { openSidebar, openModal, storeSelectedTaskId, storeSelectedSectionId, deleteTask },
)(PlanTask);
