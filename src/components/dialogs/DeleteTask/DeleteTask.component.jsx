import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '../../UI';

const DeleteTaskComponent = props => {
  const deleteAction = () => {
    const { taskId, sectionId } = props;
    props.storeSelectedSectionId(sectionId);
    props.storeSelectedTaskId('');
    props.deleteTask(taskId);
  };

  const actions = [
    {
      name: 'Cancel',
      intent: 'secondary',
      action: props.handleClose,
    },
    {
      name: 'Delete Task',
      intent: 'error',
      action: deleteAction,
    },
  ];

  return (
    props.show && (
      <Dialog actions={actions} handleClose={props.handleClose}>
        Are you sure you want to delete the task?
      </Dialog>
    )
  );
};

DeleteTaskComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  sectionId: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  storeSelectedSectionId: PropTypes.func.isRequired,
  storeSelectedTaskId: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default DeleteTaskComponent;
