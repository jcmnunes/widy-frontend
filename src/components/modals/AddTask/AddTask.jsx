import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Modal,
  ModalBody,
  ModalTitle,
  ModalFooter,
  Input,
  Button,
  Select,
} from '@binarycapsule/ui-capsules';
import CustomLabel from './components/CustomLabel';
import { FormHeading, Section } from './AddTask.styles';
import { scopesOptionsSelector } from '../../../selectors/scopes/scopesSelectors';

const AddTask = ({ isOpen, isLoading, startCreateTaskRequest, closeModal }) => {
  const [title, setTitle] = useState('');
  const [scope, setScope] = useState(null);
  const [error, setError] = useState('');

  const scopesOptions = useSelector(scopesOptionsSelector);

  const history = useHistory();

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
      startCreateTaskRequest(title, scope ? scope.value : null);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setError('');
      setScope(null);
    }
  }, [isOpen]);

  const filterScopes = ({ data: { label, shortCode } }, input) => {
    if (input) {
      return (
        label.toLowerCase().includes(input.toLowerCase()) ||
        shortCode.toLowerCase().includes(input.toLowerCase())
      );
    }
    return true;
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modal - Add a new task">
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <Section>
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
          </Section>
          <FormHeading>Task scope</FormHeading>
          <Select
            isClearable
            value={scope}
            options={scopesOptions}
            placeholder="No scope"
            onChange={opt => setScope(opt)}
            formatOptionLabel={CustomLabel}
            menuPortalTarget={document.body}
            filterOption={filterScopes}
          />
          <div style={{ marginTop: 8 }}>
            <Button
              onClick={() => {
                closeModal();
                history.push('/settings/scopes');
              }}
              appearance="link"
              size="small"
            >
              Create new scope
            </Button>
          </div>
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
