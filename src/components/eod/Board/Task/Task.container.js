import { connect } from 'react-redux';
import Task from './Task';
import { openSidebar } from '../../../../actions/sidebar';
import { storeSelectedSectionId } from '../../../../actions/sections';
import { storeSelectedTaskId } from '../../../../actions/tasks';

const mapStateToProps = state => ({
  selectedTaskId: state.tasks.selected,
});

export default connect(
  mapStateToProps,
  { openSidebar, storeSelectedTaskId, storeSelectedSectionId },
)(Task);
