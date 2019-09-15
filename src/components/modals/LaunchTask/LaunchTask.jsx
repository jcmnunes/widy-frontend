import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  Radio,
} from '@binarycapsule/ui-capsules';
import { Error, Radios } from './LaunchTask.styles';

const LaunchTaskBak = ({
  isOpen,
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
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modal - Add a new task">
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <ModalTitle>Choose a section:</ModalTitle>
          <Radios>
            {sectionsRadios.map(({ id, label }) => (
              <Radio
                appearance="primary"
                key={id}
                value={id}
                onChange={handleOnChange}
                checked={id === checkedId}
                size="large"
              >
                {label}
              </Radio>
            ))}
          </Radios>
          {!!error && <Error>{error}</Error>}
        </ModalBody>
        <ModalFooter>
          <Button appearance="secondary" size="large" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit" appearance="primary" size="large">
            Launch task
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

LaunchTaskBak.propTypes = {
  isOpen: PropTypes.bool.isRequired,
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

export default LaunchTaskBak;
