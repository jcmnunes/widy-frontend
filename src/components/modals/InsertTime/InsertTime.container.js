import { connect } from 'react-redux';
import InsertTime from './InsertTime';
import { closeModal } from '../../../actions/modals';
import { updateTask } from '../../../actions/tasks';

const mapStateToProps = state => ({
  selectedTaskId: state.tasks.selected,
});

export default connect(
  mapStateToProps,
  { closeModal, updateTask },
)(InsertTime);
