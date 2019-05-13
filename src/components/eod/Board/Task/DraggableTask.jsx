import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
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

  handleTaskCheckboxChange = () => {
    const { activeTask, sectionId, taskId, isCompleted } = this.props;
    this.props.storeSelectedSectionId(sectionId);
    this.props.storeSelectedTaskId(taskId);
    if (activeTask.taskId === taskId) {
      this.props.stopTask(taskId, sectionId);
    }
    this.props.updateTask(taskId, { completed: !isCompleted, start: null });
  };

  handleTaskCheckboxClick = e => {
    e.stopPropagation();
  };

  render() {
    const {
      taskId,
      sectionId,
      selectedTaskId,
      activeTask,
      index,
      isCompleted,
      taskTitle,
    } = this.props;
    return (
      <Draggable draggableId={taskId} index={index}>
        {(provided, snapshot) => (
          <Task
            taskRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            taskId={taskId}
            sectionId={sectionId}
            isSelected={taskId === selectedTaskId}
            isCompleted={isCompleted}
            isActive={activeTask.taskId === taskId && !activeTask.inBreak}
            isInBreak={activeTask.taskId === taskId && activeTask.inBreak}
            onClick={this.handleTaskClick}
            onDoubleClick={this.handleTaskDoubleClick}
            onCheckChange={this.handleTaskCheckboxChange}
            onCheckClick={this.handleTaskCheckboxClick}
            storeSelectedSectionId={this.props.storeSelectedSectionId}
            storeSelectedTaskId={this.props.storeSelectedTaskId}
            openModal={this.props.openModal}
            isDragging={snapshot.isDragging}
          >
            {taskTitle}
          </Task>
        )}
      </Draggable>
    );
  }
}

DraggableTask.propTypes = {
  index: PropTypes.number.isRequired,
  sectionId: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
  selectedTaskId: PropTypes.string.isRequired,
  activeTask: PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    inBreak: PropTypes.bool.isRequired,
  }).isRequired,
  isCompleted: PropTypes.bool.isRequired,
  taskTitle: PropTypes.string.isRequired,
  storeSelectedTaskId: PropTypes.func.isRequired,
  storeSelectedSectionId: PropTypes.func.isRequired,
  openSidebar: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  stopTask: PropTypes.func.isRequired,
};

export default DraggableTask;
