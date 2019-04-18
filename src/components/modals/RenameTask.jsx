import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputField, ModalBase } from '../UI';
import { closeModal } from '../../actions/modals';
import { updateTask } from '../../actions/tasks';
import { selectedTaskTitleSelector } from '../../selectors/tasks/tasksSelectors';

const RenameTask = props => {
  const [title, setTitle] = useState(props.selectedTaskTitle);
  const [error, setError] = useState('');

  const handleOnChange = e => {
    const { value } = e.target;
    setTitle(value);
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!title) {
      setError('You need to enter the new task name.');
    } else {
      props.updateTask(props.selectedTaskId, { title });
      props.closeModal();
    }
  };

  return (
    <ModalBase actionText="Rename task" handleSubmit={handleSubmit}>
      <h1 className="title">Rename the task</h1>
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

RenameTask.propTypes = {
  selectedTaskId: PropTypes.string.isRequired,
  selectedTaskTitle: PropTypes.string.isRequired,
  updateTask: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedTaskId: state.tasks.selected,
  selectedTaskTitle: selectedTaskTitleSelector(state),
});

export default connect(
  mapStateToProps,
  { closeModal, updateTask },
)(RenameTask);
