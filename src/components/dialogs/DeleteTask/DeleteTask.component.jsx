import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../UI/Dialog';
// import { Dialog } from '@binarycapsule/ui-capsules';

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
      name: 'Delete',
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

  // return (
  //   <Dialog
  //     isOpen={props.show}
  //     onRequestClose={props.handleClose}
  //     contentLabel="Example dialog"
  //     actions={actions}
  //   >
  //     Are you sure you want to delete?
  //   </Dialog>
  // );
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
