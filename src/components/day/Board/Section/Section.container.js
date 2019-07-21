import { connect } from 'react-redux';
import SectionComponent from './Section.component';
import { openModal } from '../../../../actions/modals';
import { storeCreateTaskData } from '../../../../actions/tasks';
import { noTasksSelector } from '../../../../selectors/tasks/tasksSelectors';

const mapStateToProps = (state, props) => ({
  section: state.sections.byId[props.sectionId],
  noTasks: noTasksSelector(state),
});

export default connect(
  mapStateToProps,
  { openModal, storeCreateTaskData },
)(SectionComponent);
