import { connect } from 'react-redux';
import Task from './Task';
import { openSidebar } from '../../../../actions/sidebar';
import { storeSelectedTaskId } from '../../../../actions/tasks';

const mapStateToProps = state => ({
  selectedTaskId: state.tasks.selectedTaskId,
});

export default connect(
  mapStateToProps,
  { openSidebar, storeSelectedTaskId },
)(Task);
