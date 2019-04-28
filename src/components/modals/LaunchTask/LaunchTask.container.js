import { connect } from 'react-redux';
import { launchTask } from '../../../actions/tasks';
import LaunchTask from './LaunchTask';
import { addTaskAtIndex, removeTask } from '../../../actions/sections';
import { closeModal } from '../../../actions/modals';
import {
  normalSectionsRadiosSelector,
  selectedTaskIndexSelector,
} from '../../../selectors/sections/sectionsSelectors';

const mapStateToProps = state => ({
  sectionsRadios: normalSectionsRadiosSelector(state),
  selectedTaskId: state.tasks.selected,
  taskTitle: state.tasks.byId[state.tasks.selected].title,
  planSectionId: state.sections.order[0],
  selectedTaskIndex: selectedTaskIndexSelector(state),
});

export default connect(
  mapStateToProps,
  { removeTask, addTaskAtIndex, closeModal, launchTask },
)(LaunchTask);
