import { connect } from 'react-redux';
import TaskMenu from './TaskMenu';
import { canRegisterTimeSelector } from '../../../../selectors/tasks/tasksSelectors';

const mapStateToProps = state => ({
  canRegisterTime: canRegisterTimeSelector(state),
});

export default connect(mapStateToProps)(TaskMenu);
