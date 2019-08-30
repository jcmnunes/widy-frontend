import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Timer from '../Timer';
import Stats from './Stats';
import { getCurrentPomodoroInfo } from '../../../helpers/pomodoro';
import settings from '../../../helpers/settings';
import { StyledPomodoro, Time, Units } from './Pomodoro.styles';

const { pomodoro } = settings();

const Pomodoro = ({ taskId, sectionId, isTaskActive, activeTask, selectedTask }) => {
  const { time, start } = activeTask;
  const newTime = isTaskActive > 0 ? time + moment().diff(start, 'seconds') : selectedTask.time;

  const renderTime = () => {
    const { inBreak, elapsedTime } = getCurrentPomodoroInfo(newTime);
    if (inBreak) return `${elapsedTime} / ${pomodoro.shortBreak}`;
    return `${elapsedTime} / ${pomodoro.length}`;
  };

  return (
    <>
      {!selectedTask.completed && (
        <StyledPomodoro>
          <Timer size={48} taskId={taskId} sectionId={sectionId} />
          <Time>
            {renderTime()}
            <Units>min</Units>
          </Time>
        </StyledPomodoro>
      )}
      <Stats time={newTime} />
    </>
  );
};

Pomodoro.propTypes = {
  taskId: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  isTaskActive: PropTypes.bool.isRequired,
  activeTask: PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sectionId: PropTypes.string.isRequired,
    dayId: PropTypes.string.isRequired,
    inBreak: PropTypes.bool.isRequired,
    time: PropTypes.number.isRequired,
    start: PropTypes.string,
  }).isRequired,
  selectedTask: PropTypes.shape({
    time: PropTypes.number.isRequired,
    start: PropTypes.string,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Pomodoro;
