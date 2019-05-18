import { connect } from 'react-redux';
import InsertTime from './InsertTime';
import { openModal } from '../../../../actions/modals';
import {
  isSelectedTaskInPlanSelector,
  isSelectedTaskCompletedSelector,
  isSelectedTaskActiveSelector,
} from '../../../../selectors/tasks/tasksSelectors';

const mapStateToProps = state => ({
  isSelectedTaskActive: isSelectedTaskActiveSelector(state),
  isSelectedTaskInPlan: isSelectedTaskInPlanSelector(state),
  isSelectedTaskCompleted: isSelectedTaskCompletedSelector(state),
});

export default connect(
  mapStateToProps,
  { openModal },
)(InsertTime);
