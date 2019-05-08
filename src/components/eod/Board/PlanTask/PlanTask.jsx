import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { IconEdit, IconLaunch, IconRightThickArrow, IconTrash } from '../../../../icons/Icons';
import { LAUNCH_TASK, RENAME_TASK } from '../../../modals/types';
import { DeleteTaskDialog } from '../../../Dialogs';

const getTaskBackground = props => {
  if (props.isDragging) return props.theme.blue050;
  if (props.selected) return props.theme.neutral075;
  return 'white';
};

const Actions = styled.div`
  & > * {
    cursor: pointer;
    margin-left: 8px;
  }
`;

const StyledIconRightThickArrow = styled(IconRightThickArrow)`
  flex-shrink: 0;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Title = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 16px;
  flex: 1;
  width: 0;
`;

const StyledPlanTask = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border: none;
  background: ${props => getTaskBackground(props)};
  padding: 8px;
  font-size: 16px;
  margin: 0;
  color: ${props => props.theme.neutral700};
  cursor: pointer;

  ${Actions} {
    display: none;
  }

  &:hover {
    background: ${props => (props.selected ? props.neutral075 : props.theme.neutral050)};

    & ${Actions} {
      display: flex;
    }
  }
`;

class PlanTask extends Component {
  state = {
    showDeleteTaskDialog: false,
    isLaunchHover: false,
    isEditHover: false,
    isTrashHover: false,
  };

  handleTaskClick = () => {
    const { sectionId, taskId } = this.props;
    this.props.storeSelectedSectionId(sectionId);
    this.props.storeSelectedTaskId(taskId);
    this.props.openSidebar();
  };

  handleLaunchClick = e => {
    e.stopPropagation();
    const { sectionId, taskId } = this.props;
    this.props.storeSelectedSectionId(sectionId);
    this.props.storeSelectedTaskId(taskId);
    this.props.openModal(LAUNCH_TASK);
  };

  handleEditClick = e => {
    e.stopPropagation();
    const { sectionId, taskId } = this.props;
    this.props.storeSelectedSectionId(sectionId);
    this.props.storeSelectedTaskId(taskId);
    this.props.openModal(RENAME_TASK);
  };

  handleTaskDoubleClick = () => {
    const { sectionId, taskId } = this.props;
    this.props.storeSelectedSectionId(sectionId);
    this.props.storeSelectedTaskId(taskId);
    this.props.openModal(RENAME_TASK);
  };

  handleTrashClick = e => {
    e.stopPropagation();
    this.setState({ showDeleteTaskDialog: true });
  };

  deleteTaskCancelAction = () => {
    this.setState({ showDeleteTaskDialog: false });
  };

  handleLaunchMouseEnter = () => {
    this.setState({ isLaunchHover: true });
  };

  handleLaunchMouseLeave = () => {
    this.setState({ isLaunchHover: false });
  };

  handleEditMouseEnter = () => {
    this.setState({ isEditHover: true });
  };

  handleEditMouseLeave = () => {
    this.setState({ isEditHover: false });
  };

  handleTrashMouseEnter = () => {
    this.setState({ isTrashHover: true });
  };

  handleTrashMouseLeave = () => {
    this.setState({ isTrashHover: false });
  };

  render() {
    const { taskId, sectionId, selectedTaskId, index, theme, children } = this.props;
    const { showDeleteTaskDialog, isLaunchHover, isEditHover, isTrashHover } = this.state;
    return (
      <>
        <Draggable draggableId={taskId} index={index}>
          {(provided, snapshot) => (
            <StyledPlanTask
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              selected={taskId === selectedTaskId}
              onClick={this.handleTaskClick}
              isDragging={snapshot.isDragging}
            >
              <TitleContainer onDoubleClick={this.handleTaskDoubleClick}>
                <StyledIconRightThickArrow />
                <Title>{children}</Title>
              </TitleContainer>
              <Actions>
                <IconLaunch
                  onMouseEnter={this.handleLaunchMouseEnter}
                  onMouseLeave={this.handleLaunchMouseLeave}
                  onClick={this.handleLaunchClick}
                  primaryColor={isLaunchHover ? theme.neutral400 : theme.neutral300}
                  secondaryColor={isLaunchHover ? theme.neutral300 : theme.neutral200}
                />
                <IconEdit
                  onMouseEnter={this.handleEditMouseEnter}
                  onMouseLeave={this.handleEditMouseLeave}
                  onClick={this.handleEditClick}
                  primaryColor={isEditHover ? theme.neutral400 : theme.neutral300}
                  secondaryColor={isEditHover ? theme.neutral300 : theme.neutral200}
                />
                <IconTrash
                  onMouseEnter={this.handleTrashMouseEnter}
                  onMouseLeave={this.handleTrashMouseLeave}
                  onClick={this.handleTrashClick}
                  primaryColor={isTrashHover ? theme.neutral400 : theme.neutral300}
                  secondaryColor={isTrashHover ? theme.neutral300 : theme.neutral200}
                />
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

PlanTask.propTypes = {
  index: PropTypes.number.isRequired,
  sectionId: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
  selectedTaskId: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  storeSelectedTaskId: PropTypes.func.isRequired,
  storeSelectedSectionId: PropTypes.func.isRequired,
  openSidebar: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default withTheme(PlanTask);
