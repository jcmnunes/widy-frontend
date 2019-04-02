import React, { Component } from 'react';
import styled from 'styled-components';
import { Checkbox } from '../../../UI';

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 1px solid ${props => props.theme.neutral200};
  border: ${props =>
    props.selected ? `1px solid ${props.theme.yellow500}` : `1px solid ${props.theme.neutral200}`};
  border-radius: 4px;
  background: ${props => (props.selected ? `${props.theme.yellow050}` : 'white')};
  padding: 8px;
  font-size: 16px;
  margin: 4px 0;
  color: ${props => props.theme.neutral700};
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 12px;
  }
`;

class Task extends Component {
  handleTaskClick = () => {
    const { taskId } = this.props;
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
    const { taskId, selectedTaskId } = this.props;
    return (
      <StyledTask selected={taskId === selectedTaskId} onClick={this.handleTaskClick}>
        <Checkbox onChange={this.handleTaskCheckboxChange} onClick={this.handleTaskCheckboxClick} />
        <span className="title">{this.props.children}</span>
      </StyledTask>
    );
  }
}

export default Task;
