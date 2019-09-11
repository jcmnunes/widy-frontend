import { connect } from 'react-redux';
import PlanTask from './PlanTask';
import {
  handlePlanTaskClick,
  handlePlanTaskLaunch,
  handlePlanTaskRename,
} from './PlanTask.actions';

const mapStateToProps = (state, ownProps) => ({
  selectedTaskId: state.tasks.selected,
  taskTitle: state.tasks.byId[ownProps.taskId] ? state.tasks.byId[ownProps.taskId].title : '',
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handlePlanTaskClick: handlePlanTaskClick(dispatch, ownProps),
  handlePlanTaskRename: handlePlanTaskRename(dispatch),
  handlePlanTaskLaunch: handlePlanTaskLaunch(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlanTask);
