import { connect } from 'react-redux';
import SectionComponent from './Section.component';
import { openCreateTaskModal } from './Section.actions';
import { noTasksSelector } from '../../../../selectors/tasks/tasksSelectors';

const mapStateToProps = (state, props) => ({
  section: state.sections.byId[props.sectionId],
  noTasks: noTasksSelector(state),
});

const mapDispatchToProps = {
  openCreateTaskModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SectionComponent);
