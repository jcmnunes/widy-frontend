import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { IconEdit, IconLaunch, IconRightThickArrow, IconTrash } from '../../../../icons/Icons';
import { LAUNCH_TASK } from '../../../modals/types';

const Actions = styled.div`
  & > * {
    cursor: pointer;
    margin-left: 8px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPlanTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border: none;
  background: ${props => (props.isDragging || props.selected ? props.theme.neutral050 : 'white')};
  padding: 8px;
  font-size: 16px;
  margin: 0;
  color: ${props => props.theme.neutral700};
  cursor: pointer;

  ${Actions} {
    display: none;
  }

  &:hover {
    background: ${props => props.theme.neutral050};

    & ${Actions} {
      display: flex;
    }
  }
`;

class Task extends Component {
  handleTaskClick = () => {
    const { sectionId, taskId } = this.props;
    this.props.storeSelectedSectionId(sectionId);
    this.props.storeSelectedTaskId(taskId);
    this.props.openSidebar();
  };

  handleLaunchClick = e => {
    e.stopPropagation();
    const { taskId } = this.props;
    this.props.storeSelectedTaskId(taskId);
    this.props.openModal(LAUNCH_TASK);
  };

  handleEditClick = e => {
    e.stopPropagation();
    // TODO - handleEditClick
  };

  handleTrashClick = e => {
    e.stopPropagation();
    // TODO - handleTrashClick
  };

  render() {
    const { taskId, selectedTaskId, index, theme, children } = this.props;
    return (
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
            <Title>
              <IconRightThickArrow />
              <span className="title">{children}</span>
            </Title>
            <Actions>
              <IconLaunch onClick={this.handleLaunchClick} />
              <IconEdit
                onClick={this.handleEditClick}
                primaryColor={theme.neutral300}
                secondaryColor={theme.neutral200}
              />
              <IconTrash onClick={this.handleTrashClick} />
            </Actions>
          </StyledPlanTask>
        )}
      </Draggable>
    );
  }
}

Task.propTypes = {
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

export default withTheme(Task);
