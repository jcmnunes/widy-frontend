import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown, StyledDropdown } from '../../../UI';
import DeleteTaskDialog from '../../../dialogs/DeleteTask/DeleteTask.container';
import {
  IconDotsHorizontal,
  IconEdit,
  IconTime,
  IconTrash,
  StyledTaskMenu,
  StyledTrigger,
} from './TaskMenu.styles';

const MenuTrigger = props => (
  <StyledTrigger type="button" {...props}>
    <IconDotsHorizontal />
  </StyledTrigger>
);

const TaskMenuComponent = ({
  taskId,
  sectionId,
  canRegisterTime,
  handleTaskRename,
  handleRegisterTimeClick,
}) => {
  const [showDeleteTaskDialog, setShowDeleteTaskDialog] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteTaskDialog(true);
  };

  const deleteTaskCancelAction = () => {
    setShowDeleteTaskDialog(false);
  };

  return (
    <>
      <StyledTaskMenu>
        <Dropdown trigger={<MenuTrigger />} position="right">
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
            <Button intent="dropdown" iconBefore={<IconEdit />} block onClick={handleTaskRename}>
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

TaskMenuComponent.propTypes = {
  taskId: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  canRegisterTime: PropTypes.bool.isRequired,
  handleTaskRename: PropTypes.func.isRequired,
  handleRegisterTimeClick: PropTypes.func.isRequired,
};

export default TaskMenuComponent;
