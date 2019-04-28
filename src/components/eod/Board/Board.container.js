import { connect } from 'react-redux';
import Board from './Board';
import { addTaskAtIndex, removeTask, reorderTasksArray } from '../../../actions/sections';
import { moveTask, stopTask, updateTaskInStore } from '../../../actions/tasks';
import { resetActiveTask } from '../../../actions/activeTask';

const mapStateToProps = state => ({
  sections: state.sections,
  dayId: state.days.selected,
  daysLoading: state.days.loading,
  activeTaskId: state.activeTask.taskId,
});

export default connect(
  mapStateToProps,
  {
    reorderTasksArray,
    removeTask,
    addTaskAtIndex,
    moveTask,
    stopTask,
    updateTaskInStore,
    resetActiveTask,
  },
)(Board);
