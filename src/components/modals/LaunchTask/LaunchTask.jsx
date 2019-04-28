import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Radios, ModalBase } from '../../UI';

const LaunchTask = ({
  sectionsRadios,
  planSectionId,
  removeTask,
  addTaskAtIndex,
  selectedTaskIndex,
  selectedTaskId,
  taskTitle,
  closeModal,
  launchTask,
}) => {
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
      removeTask(planSectionId, selectedTaskIndex);
      addTaskAtIndex(checkedId, 0, selectedTaskId);
      closeModal();

      launchTask(selectedTaskId, taskTitle, 0, planSectionId, checkedId, selectedTaskIndex, 0);
    }
  };

  return (
    <ModalBase actionText="Launch task" handleSubmit={handleSubmit}>
      <h1 className="title">Choose a section:</h1>
      <Radios
        intent="primary"
        checkedId={checkedId}
        data={sectionsRadios}
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
  taskTitle: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  launchTask: PropTypes.func.isRequired,
};

export default LaunchTask;
