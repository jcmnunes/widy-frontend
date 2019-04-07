import { connect } from 'react-redux';
import Section from './Section';
import { openModal } from '../../../../actions/modals';
import { storeCreateTaskData } from '../../../../actions/tasks';

const mapStateToProps = (state, props) => ({
  section: state.sections.byId[props.sectionId],
  tasks: state.tasks.byId,
});

export default connect(
  mapStateToProps,
  { openModal, storeCreateTaskData },
)(Section);
