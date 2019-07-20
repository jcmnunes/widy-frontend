import { connect } from 'react-redux';
import DeleteTaskComponent from './DeleteTask.component';
import { deleteTask, storeSelectedTaskId } from '../../../actions/tasks';
import { storeSelectedSectionId } from '../../../actions/sections';

const mapStateToProps = state => ({
  selectedTaskId: state.tasks.selected,
});

const mapDispatchToProps = {
  storeSelectedTaskId,
  storeSelectedSectionId,
  deleteTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteTaskComponent);
