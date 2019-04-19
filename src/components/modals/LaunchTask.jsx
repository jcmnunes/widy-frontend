import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Radios, ModalBase } from '../UI';
import { removeTask, addTaskAtIndex } from '../../actions/sections';
import { closeModal } from '../../actions/modals';
import { moveTask } from '../../actions/tasks';
import {
  normalSectionsRadiosSelector,
  selectedTaskIndexSelector,
} from '../../selectors/sections/sectionsSelectors';

const LaunchTask = props => {
  const [checkedId, setCheckedId] = useState('');
  const [error, setError] = useState('');

  const handleOnChange = e => {
    const { value } = e.target;
    setCheckedId(value);
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!checkedId) {
      setError('You need to select a section.');
    } else {
      props.removeTask(props.planSectionId, props.selectedTaskIndex);
      props.addTaskAtIndex(checkedId, 0, props.selectedTaskId);
      props.closeModal();

      // Make API call
      props.moveTask(
        props.selectedTaskId,
        props.planSectionId,
        checkedId,
        props.selectedTaskIndex,
        0,
      );
    }
  };

  return (
    <ModalBase actionText="Launch task" handleSubmit={handleSubmit}>
      <h1 className="title">Choose a section:</h1>
      <Radios
        intent="primary"
        checkedId={checkedId}
        data={props.sectionsRadios}
        error={error}
        onChange={handleOnChange}
      />
    </ModalBase>
  );
};

LaunchTask.propTypes = {
  sectionsRadios: PropTypes.arrayOf(PropTypes.object).isRequired,
  planSectionId: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
  addTaskAtIndex: PropTypes.func.isRequired,
  selectedTaskIndex: PropTypes.number.isRequired,
  selectedTaskId: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  moveTask: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sectionsRadios: normalSectionsRadiosSelector(state),
  selectedTaskId: state.tasks.selected,
  planSectionId: state.sections.order[0],
  selectedTaskIndex: selectedTaskIndexSelector(state),
});

export default connect(
  mapStateToProps,
  { removeTask, addTaskAtIndex, closeModal, moveTask },
)(LaunchTask);
