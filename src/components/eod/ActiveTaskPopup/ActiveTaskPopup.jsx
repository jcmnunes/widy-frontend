import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components/macro';
import { Heading2 } from '../../UI/Typography';
import Task from '../Board/Task/Task';
import settings from '../../../helpers/settings';
import { getCurrentPomodoroInfo } from '../../../helpers/pomodoro';
import { IconPlay } from '../../../icons/Icons';

const { pomodoro } = settings();

const StyledPopup = styled.div`
  position: fixed;
  width: 450px;
  padding: 18px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24);
  right: 32px;
  bottom: 32px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.neutral300};
  z-index: 7000;
  background: white;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Time = styled.div`
  font-size: 16px;
`;

const Units = styled.span`
  font-size: 12px;
`;

const StyledPlayButton = styled(IconPlay)`
  position: absolute;
  right: 32px;
  bottom: 32px;
  cursor: pointer;
`;

const ActiveTaskPopup = ({
  activeTask,
  selectedDayId,
  storeSelectedDay,
  getDay,
  stopTask,
  updateTask,
  theme,
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
      <Task
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
      </Task>
      <StyledPlayButton
        onClick={handlePlayButtonClick}
        primaryColor={theme.yellow400}
        secondaryColor={theme.yellow900}
      />
    </StyledPopup>
  ) : null;
};

ActiveTaskPopup.propTypes = {
  activeTask: PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sectionId: PropTypes.string.isRequired,
    dayId: PropTypes.string.isRequired,
    inBreak: PropTypes.bool.isRequired,
  }).isRequired,
  selectedDayId: PropTypes.string.isRequired,
  storeSelectedDay: PropTypes.func.isRequired,
  getDay: PropTypes.func.isRequired,
  stopTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
};

export default ActiveTaskPopup;
