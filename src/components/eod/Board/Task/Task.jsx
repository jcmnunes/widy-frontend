import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import Timer from '../../Timer';
import TaskMenu from '../TaskMenu';
import { Checkbox } from '../../../UI';
import { RENAME_TASK } from '../../../modals/types';

const getColors = props => {
  const colors = {
    border: props.theme.neutral200,
    background: 'white',
  };

  if (props.selected) {
    colors.border = props.theme.yellow500;
    colors.background = props.theme.yellow050;
  }

  if (props.isTaskInBreak) {
    colors.border = props.theme.blue200;
  }

  return colors;
};

const pulseAnimationIsActive = props => keyframes`
  from {
    border-color: ${props.theme.yellow100};
    box-shadow: 0 0 0 4px ${props.theme.yellow050};
  }

  to {
    border-color: ${props.theme.yellow700};
    box-shadow: 0 0 0 4px ${props.theme.yellow200};
  }
`;

const pulseAnimationInBreak = props => keyframes`
  from {
    border-color: ${props.theme.blue050};
    box-shadow: 0 0 0 4px ${props.theme.blue050};
  }

  to {
    border-color: ${props.theme.blue400};
    box-shadow: 0 0 0 4px ${props.theme.blue100};
  }
`;

const getAnimation = props => {
  if (props.isTaskInBreak) return pulseAnimationInBreak(props);
  if (props.isTaskActive) return pulseAnimationIsActive(props);
  return null;
};

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border: ${props => `1px solid ${getColors(props).border}`};
  border-radius: 4px;
  background: ${props => getColors(props).background};
  padding: 8px;
  font-size: 16px;
  margin: 4px 0;
  color: ${props => props.theme.neutral700};
  cursor: pointer;
  animation: ${props => getAnimation(props)};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const TaskName = styled.span`
  flex: 1;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    margin-left: 4px;
  }
`;

class Task extends Component {
  handleTaskClick = () => {
    const { sectionId, taskId } = this.props;
    this.props.storeSelectedSectionId(sectionId);
    this.props.storeSelectedTaskId(taskId);
    this.props.openSidebar();
  };

  handleTaskDoubleClick = () => {
    const { sectionId, taskId } = this.props;
    this.props.storeSelectedSectionId(sectionId);
    this.props.storeSelectedTaskId(taskId);
    this.props.openModal(RENAME_TASK);
  };

  handleTaskCheckboxChange = e => {
    // TODO ➜ Complete or reactivate a task
  };

  handleTaskCheckboxClick = e => {
    e.stopPropagation();
  };

  render() {
    const { taskId, sectionId, selectedTaskId, activeTask, index, children } = this.props;
    return (
      <Draggable draggableId={taskId} index={index}>
        {provided => (
          <StyledTask
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            selected={taskId === selectedTaskId}
            isTaskActive={activeTask.taskId === taskId && !activeTask.inBreak}
            isTaskInBreak={activeTask.taskId === taskId && activeTask.inBreak}
            onClick={this.handleTaskClick}
          >
            <Checkbox
              onChange={this.handleTaskCheckboxChange}
              onClick={this.handleTaskCheckboxClick}
            />
            <TaskName onDoubleClick={this.handleTaskDoubleClick}>{children}</TaskName>
            <Controls>
              <Timer taskId={taskId} sectionId={sectionId} />
              <TaskMenu
                taskId={taskId}
                sectionId={sectionId}
                storeSelectedSectionId={this.props.storeSelectedSectionId}
                storeSelectedTaskId={this.props.storeSelectedTaskId}
                openModal={this.props.openModal}
              />
            </Controls>
          </StyledTask>
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
  activeTask: PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    inBreak: PropTypes.bool.isRequired,
  }).isRequired,
  children: PropTypes.string.isRequired,
  storeSelectedTaskId: PropTypes.func.isRequired,
  storeSelectedSectionId: PropTypes.func.isRequired,
  openSidebar: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Task;
