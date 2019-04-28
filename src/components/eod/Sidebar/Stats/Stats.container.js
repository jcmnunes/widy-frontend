import { connect } from 'react-redux';
import Stats from './Stats';
import {
  selectedTaskTimeMinutesHoursSelector,
  selectedTaskTimeMinutesSelector,
} from '../../../../selectors/tasks/tasksSelectors';

const mapStateToProps = state => ({
  taskTimeMinutes: selectedTaskTimeMinutesSelector(state),
  taskTimeMinutesHours: selectedTaskTimeMinutesHoursSelector(state),
});

export default connect(mapStateToProps)(Stats);
