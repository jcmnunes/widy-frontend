import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  ModalTitle,
  ModalFooter,
  Input,
  Button,
} from '@binarycapsule/ui-capsules';

const AddTask = ({ isOpen, isLoading, startCreateTaskRequest, closeModal }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleOnChange = e => {
    const { value } = e.target;
    setTitle(value);
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!title) {
      setError('You need to enter the task name.');
    } else {
      startCreateTaskRequest(title);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setError('');
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modal - Add a new task">
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <ModalTitle>What will you be working on?</ModalTitle>
          <Input
            type="text"
            value={title}
            placeholder="Task name"
            onChange={handleOnChange}
            size="large"
            autoFocus
            error={error}
          />
        </ModalBody>
        <ModalFooter>
          <Button appearance="secondary" size="large" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isLoading} appearance="primary" size="large">
            Add task
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

AddTask.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  startCreateTaskRequest: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AddTask;
