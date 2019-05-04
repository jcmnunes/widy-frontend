import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { closeSidebar } from '../../../actions/sidebar';
import { isSelectedTaskInPlanSelector } from '../../../selectors/tasks/tasksSelectors';
import { openModal } from '../../../actions/modals';

const mapStateToProps = state => ({
  isOpen: state.sidebar.isOpen,
  selectedTaskId: state.tasks.selected,
  isSelectedTaskInPlan: isSelectedTaskInPlanSelector(state),
});

export default connect(
  mapStateToProps,
  { closeSidebar, openModal },
)(Sidebar);
