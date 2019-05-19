import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconDotsHorizontal, IconEdit, IconTrash, IconTime } from '../../../../icons/Icons';
import { Button, Dropdown, StyledDropdown } from '../../../UI';
import { DeleteTaskDialog } from '../../../Dialogs';
import { REGISTER_TIME, RENAME_TASK } from '../../../modals/types';

const StyledTaskMenu = styled.div`
  height: 24px;
  cursor: pointer;
`;

const TaskMenu = ({
  taskId,
  sectionId,
  canRegisterTime,
  storeSelectedSectionId,
  storeSelectedTaskId,
  openModal,
}) => {
  const [showDeleteTaskDialog, setShowDeleteTaskDialog] = useState(false);

  const handleEditClick = () => {
    storeSelectedSectionId(sectionId);
    storeSelectedTaskId(taskId);
    openModal(RENAME_TASK);
  };

  const handleDeleteClick = () => {
    setShowDeleteTaskDialog(true);
  };

  const handleRegisterTimeClick = () => {
    openModal(REGISTER_TIME);
  };

  const deleteTaskCancelAction = () => {
    setShowDeleteTaskDialog(false);
  };

  return (
    <>
      <StyledTaskMenu>
        <Dropdown trigger={<IconDotsHorizontal />} position="right">
          <StyledDropdown>
            {canRegisterTime && (
              <Button
                intent="dropdown"
                iconBefore={<IconTime />}
                block
                onClick={handleRegisterTimeClick}
              >
                Register Time
              </Button>
            )}
            <Button intent="dropdown" iconBefore={<IconEdit />} block onClick={handleEditClick}>
              Rename
            </Button>
            <Button intent="dropdown" iconBefore={<IconTrash />} block onClick={handleDeleteClick}>
              Delete
            </Button>
          </StyledDropdown>
        </Dropdown>
      </StyledTaskMenu>
      <DeleteTaskDialog
        show={showDeleteTaskDialog}
        taskId={taskId}
        sectionId={sectionId}
        handleClose={deleteTaskCancelAction}
      />
    </>
  );
};

TaskMenu.propTypes = {
  taskId: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  canRegisterTime: PropTypes.bool.isRequired,
  storeSelectedSectionId: PropTypes.func.isRequired,
  storeSelectedTaskId: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default TaskMenu;
