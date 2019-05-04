import { connect } from 'react-redux';
import Task from './Task';
import { openSidebar } from '../../../../actions/sidebar';
import { storeSelectedSectionId } from '../../../../actions/sections';
import { storeSelectedTaskId } from '../../../../actions/tasks';
import { openModal } from '../../../../actions/modals';

const mapStateToProps = state => ({
  selectedTaskId: state.tasks.selected,
  activeTask: state.activeTask,
});

export default connect(
  mapStateToProps,
  { openSidebar, storeSelectedTaskId, storeSelectedSectionId, openModal },
)(Task);
