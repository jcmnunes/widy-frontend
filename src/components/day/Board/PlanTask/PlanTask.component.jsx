import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import DeleteTaskDialog from '../../../dialogs/DeleteTask/DeleteTask.container';
import toast from '../../../../helpers/toast';
import {
  Actions,
  IconDuplicate,
  IconEdit,
  IconLaunch,
  IconTrash,
  StyledIconRightThickArrow,
  StyledPlanTask,
  Title,
  TitleContainer,
} from './PlanTask.styles';

class PlanTaskComponent extends Component {
  state = { showDeleteTaskDialog: false };

  handleTrashClick = event => {
    event.stopPropagation();
    this.setState({ showDeleteTaskDialog: true });
  };

  handleOnTaskTitleCopy = () => {
    toast.success({
      title: 'Done!',
      message: 'Task title copied',
    });
  };

  deleteTaskCancelAction = () => {
    this.setState({ showDeleteTaskDialog: false });
  };

  render() {
    const {
      index,
      taskId,
      taskTitle,
      sectionId,
      selectedTaskId,
      handlePlanTaskClick,
      handlePlanTaskRename,
      handlePlanTaskLaunch,
    } = this.props;
    const { showDeleteTaskDialog } = this.state;
    return (
      <>
        <Draggable draggableId={taskId} index={index}>
          {(provided, snapshot) => (
            <StyledPlanTask
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isSelected={taskId === selectedTaskId}
              onClick={handlePlanTaskClick(sectionId, taskId)}
              isDragging={snapshot.isDragging}
            >
              <TitleContainer onDoubleClick={handlePlanTaskRename()}>
                <StyledIconRightThickArrow />
                <Title>{taskTitle}</Title>
              </TitleContainer>
              <Actions>
                <CopyToClipboard text={taskTitle} onCopy={this.handleOnTaskTitleCopy}>
                  <button type="button" onClick={event => event.stopPropagation()}>
                    <IconDuplicate />
                  </button>
                </CopyToClipboard>
                <button type="button" onClick={handlePlanTaskLaunch()}>
                  <IconLaunch />
                </button>
                <button type="button" onClick={handlePlanTaskRename()}>
                  <IconEdit />
                </button>
                <button type="button" onClick={this.handleTrashClick}>
                  <IconTrash />
                </button>
              </Actions>
            </StyledPlanTask>
          )}
        </Draggable>
        <DeleteTaskDialog
          show={showDeleteTaskDialog}
          taskId={taskId}
          sectionId={sectionId}
          handleClose={this.deleteTaskCancelAction}
        />
      </>
    );
  }
}

PlanTaskComponent.propTypes = {
  index: PropTypes.number.isRequired,
  taskId: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  selectedTaskId: PropTypes.string.isRequired,
  handlePlanTaskClick: PropTypes.func.isRequired,
  handlePlanTaskRename: PropTypes.func.isRequired,
  handlePlanTaskLaunch: PropTypes.func.isRequired,
};

export default PlanTaskComponent;
