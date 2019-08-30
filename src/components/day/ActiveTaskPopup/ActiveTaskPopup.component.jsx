import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Heading2 } from '../../UI/Typography';
import TaskComponent from '../Board/Task/Task.component';
import settings from '../../../helpers/settings';
import { getCurrentPomodoroInfo } from '../../../helpers/pomodoro';
import {
  Header,
  StopButton,
  StyledIconStop,
  StyledPopup,
  Time,
  Units,
} from './ActiveTaskPopup.styles';
import Icon from '../../../icons/Icon';

const { pomodoro } = settings();

const ActiveTaskPopupComponent = ({
  activeTask,
  selectedDayId,
  storeSelectedDay,
  getDay,
  stopTask,
  updateTask,
}) => {
  const renderTime = () => {
    const { time, start } = activeTask;
    const newTime = time + moment().diff(start, 'seconds');
    const { inBreak, elapsedTime } = getCurrentPomodoroInfo(newTime);
    if (inBreak) return `${elapsedTime} / ${pomodoro.shortBreak}`;
    return `${elapsedTime} / ${pomodoro.length}`;
  };

  const handlePlayButtonClick = e => {
    e.stopPropagation();
    stopTask();
  };

  const handleTaskClick = () => {
    const { dayId } = activeTask;
    storeSelectedDay(dayId);
    getDay(dayId);
  };

  const handleCheckClick = e => e.stopPropagation();

  const handleCheckChange = () => {
    const { taskId, sectionId, dayId } = activeTask;
    stopTask();
    updateTask(taskId, { completed: true, start: null }, { sectionId, dayId });
  };

  return selectedDayId && activeTask.dayId && selectedDayId !== activeTask.dayId ? (
    <StyledPopup data-test="active-task-popup">
      <Header>
        <Heading2>Working on:</Heading2>
        <Time data-test="time-indicator">
          {renderTime()} <Units>min</Units>
        </Time>
      </Header>
      <TaskComponent
        taskId={activeTask.taskId}
        isCompleted={false}
        sectionId={activeTask.sectionId}
        isSelected
        isActive
        isInBreak={activeTask.inBreak}
        renderControls={false}
        onClick={handleTaskClick}
        onCheckClick={handleCheckClick}
        onCheckChange={handleCheckChange}
        isDragging={false}
        isInActiveTaskPopup
        data-test="task"
      >
        {activeTask.title}
      </TaskComponent>
      <StopButton onClick={handlePlayButtonClick}>
        <StyledIconStop icon={Icon.STOP} isInBreak={activeTask.inBreak} />
      </StopButton>
    </StyledPopup>
  ) : null;
};

ActiveTaskPopupComponent.propTypes = {
  activeTask: PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sectionId: PropTypes.string.isRequired,
    dayId: PropTypes.string.isRequired,
    inBreak: PropTypes.bool.isRequired,
    time: PropTypes.number.isRequired,
    start: PropTypes.string,
  }).isRequired,
  selectedDayId: PropTypes.string.isRequired,
  storeSelectedDay: PropTypes.func.isRequired,
  getDay: PropTypes.func.isRequired,
  stopTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default ActiveTaskPopupComponent;
