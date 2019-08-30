import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../../Timer';
import TaskMenu from '../TaskMenu/TaskMenu.container';
import { Checkbox } from '../../../UI';
import { Control, Controls, StyledTask, TaskTitle } from './Task.styles';
import TaskCopyButton from '../TaskCopyButton/TaskCopyButton.component';

const TaskComponent = ({
  taskRef,
  taskId,
  sectionId,
  isSelected,
  isActive,
  isInBreak,
  isCompleted,
  renderControls,
  isDragging,
  isInActiveTaskPopup,
  handleTaskClick,
  handleTaskRename,
  handleTaskCompletedStateChange,
  children,
  ...other
}) => (
  <StyledTask
    ref={taskRef}
    isSelected={isSelected}
    isActive={isActive}
    isInBreak={isInBreak}
    isCompleted={isCompleted}
    isDragging={isDragging}
    onClick={handleTaskClick(sectionId, taskId)}
    {...other}
  >
    <Checkbox
      checked={isCompleted}
      onChange={handleTaskCompletedStateChange(isActive, sectionId, taskId, isCompleted)}
    />
    <TaskTitle onDoubleClick={handleTaskRename}>{children}</TaskTitle>
    {!isInActiveTaskPopup && <TaskCopyButton taskTitle={children} />}
    {renderControls && !isCompleted && (
      <Controls>
        <Timer taskId={taskId} sectionId={sectionId} />
        <Control>
          <TaskMenu taskId={taskId} sectionId={sectionId} />
        </Control>
      </Controls>
    )}
  </StyledTask>
);

TaskComponent.defaultProps = {
  taskRef: null,
  renderControls: true,
  isInActiveTaskPopup: false,
};

TaskComponent.propTypes = {
  taskRef: PropTypes.func,
  taskId: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  renderControls: PropTypes.bool,
  isCompleted: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  isInBreak: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  isInActiveTaskPopup: PropTypes.bool,
  handleTaskClick: PropTypes.func.isRequired,
  handleTaskRename: PropTypes.func.isRequired,
  handleTaskCompletedStateChange: PropTypes.func.isRequired,
};

export default TaskComponent;
