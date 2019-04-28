import { connect } from 'react-redux';
import DeleteTask from './DeleteTask';
import { deleteTask, storeSelectedTaskId } from '../../../actions/tasks';
import { storeSelectedSectionId } from '../../../actions/sections';

const mapStateToProps = state => ({
  selectedTaskId: state.tasks.selected,
});

export default connect(
  mapStateToProps,
  { storeSelectedTaskId, storeSelectedSectionId, deleteTask },
)(DeleteTask);
