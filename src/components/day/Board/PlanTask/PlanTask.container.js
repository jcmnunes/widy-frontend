import { connect } from 'react-redux';
import PlanTask from './PlanTask.component';
import {
  handlePlanTaskClick,
  handlePlanTaskLaunch,
  handlePlanTaskRename,
} from './PlanTask.actions';

const mapStateToProps = (state, ownProps) => ({
  selectedTaskId: state.tasks.selected,
  taskTitle: state.tasks.byId[ownProps.taskId].title,
});

const mapDispatchToProps = {
  handlePlanTaskClick,
  handlePlanTaskRename,
  handlePlanTaskLaunch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlanTask);
