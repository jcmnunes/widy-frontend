import { connect } from 'react-redux';
import Board from './Board';
import { addTaskAtIndex, removeTask, reorderTasksArray } from '../../../actions/sections';
import { moveTask } from '../../../actions/tasks';

const mapStateToProps = state => ({
  sections: state.sections,
  dayId: state.days.selected,
  daysLoading: state.days.loading,
});

export default connect(
  mapStateToProps,
  { reorderTasksArray, removeTask, addTaskAtIndex, moveTask },
)(Board);
