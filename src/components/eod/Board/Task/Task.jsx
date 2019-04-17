import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Checkbox } from '../../../UI';

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border: ${props =>
    props.selected ? `1px solid ${props.theme.yellow500}` : `1px solid ${props.theme.neutral200}`};
  border-radius: 4px;
  background: ${props => (props.selected ? `${props.theme.yellow050}` : 'white')};
  padding: 8px;
  font-size: 16px;
  margin: 4px 0;
  color: ${props => props.theme.neutral700};
  cursor: pointer;
`;

class Task extends Component {
  handleTaskClick = () => {
    const { sectionId, taskId } = this.props;
    this.props.storeSelectedSectionId(sectionId);
    this.props.storeSelectedTaskId(taskId);
    this.props.openSidebar();
  };

  handleTaskCheckboxChange = e => {
    // TODO
  };

  handleTaskCheckboxClick = e => {
    e.stopPropagation();
  };

  render() {
    const { taskId, selectedTaskId, index, children } = this.props;
    return (
      <Draggable draggableId={taskId} index={index}>
        {provided => (
          <StyledTask
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            selected={taskId === selectedTaskId}
            onClick={this.handleTaskClick}
          >
            <Checkbox
              onChange={this.handleTaskCheckboxChange}
              onClick={this.handleTaskCheckboxClick}
            />
            <span className="title">{children}</span>
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
  children: PropTypes.string.isRequired,
  storeSelectedTaskId: PropTypes.func.isRequired,
  storeSelectedSectionId: PropTypes.func.isRequired,
  openSidebar: PropTypes.func.isRequired,
};

export default Task;
