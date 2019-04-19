import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputField, ModalBase } from '../UI';
import { startCreateTaskRequest } from '../../actions/tasks';

const AddTask = props => {
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
      props.startCreateTaskRequest(title);
    }
  };

  return (
    <ModalBase loading={props.loading} actionText="Add task" handleSubmit={handleSubmit}>
      <h1 className="title">What will you be working on?</h1>
      <InputField
        autoFocus
        type="text"
        name="title"
        placeholder="Task name"
        value={title}
        onChange={handleOnChange}
        error={error}
      />
    </ModalBase>
  );
};

AddTask.propTypes = {
  startCreateTaskRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.tasks.createTask.loading,
});

export default connect(
  mapStateToProps,
  { startCreateTaskRequest },
)(AddTask);
