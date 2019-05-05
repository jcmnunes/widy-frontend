import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import noop from 'lodash.noop';
import Task from './Task';
import { RENAME_TASK } from '../../../modals/types';

class DraggableTask extends Component {
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
          <Task
            taskRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            taskId={taskId}
            sectionId={sectionId}
            isSelected={taskId === selectedTaskId}
            isActive={activeTask.taskId === taskId && !activeTask.inBreak}
            isInBreak={activeTask.taskId === taskId && activeTask.inBreak}
            onClick={this.handleTaskClick}
            onDoubleClick={this.handleTaskDoubleClick}
            onCheckChange={this.handleTaskCheckboxChange}
            onCheckClick={this.handleTaskCheckboxClick}
            storeSelectedSectionId={this.props.storeSelectedSectionId}
            storeSelectedTaskId={this.props.storeSelectedTaskId}
            openModal={this.props.openModal}
          >
            {children}
          </Task>
        )}
      </Draggable>
    );
  }
}

DraggableTask.defaultProps = {
  index: 0,
  isDragDisabled: false,
  storeSelectedTaskId: noop,
  storeSelectedSectionId: noop,
  openSidebar: noop,
  openModal: noop,
};

DraggableTask.propTypes = {
  index: PropTypes.number,
  sectionId: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
  selectedTaskId: PropTypes.string.isRequired,
  activeTask: PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    inBreak: PropTypes.bool.isRequired,
  }).isRequired,
  children: PropTypes.string.isRequired,
  storeSelectedTaskId: PropTypes.func,
  storeSelectedSectionId: PropTypes.func,
  openSidebar: PropTypes.func,
  openModal: PropTypes.func,
  isDragDisabled: PropTypes.bool,
};

export default DraggableTask;
