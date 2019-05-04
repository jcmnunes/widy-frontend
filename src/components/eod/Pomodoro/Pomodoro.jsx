import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import moment from 'moment';
import Timer from '../Timer';
import Stats from './Stats';
import { getCurrentPomodoroInfo } from '../../../helpers/pomodoro';
import settings from '../../../helpers/settings';

const { pomodoro } = settings;

const StyledPomodoro = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
`;

const Time = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-left: 8px;
  font-size: 24px;
  color: ${props => props.theme.neutral700};
`;

const Units = styled.div`
  font-size: 16px;
  margin-left: 4px;
`;

// TODO 👇
let timer = null;

const Pomodoro = ({ taskId, sectionId, isTaskActive, selectedTask }) => {
  const [time, setTime] = useState(0);

  /**
   * Responsible for updating the Pomodoro widget
   */
  useEffect(() => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    if (isTaskActive) {
      setTime(selectedTask.time + moment().diff(selectedTask.start, 'seconds'));
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      setTime(selectedTask.time);
    }
    return () => clearInterval(timer);
  }, [taskId, isTaskActive]);

  const { inBreak, elapsedTime } = getCurrentPomodoroInfo(time);

  const renderTime = () => {
    if (inBreak) {
      return `${elapsedTime} / ${pomodoro.shortBreak}`;
    }
    return `${elapsedTime} / ${pomodoro.length}`;
  };

  // TODO ➜ remove these console.logs
  // console.log('Task title:', selectedTask.title);
  // console.log('time:', time);

  return (
    <>
      <StyledPomodoro>
        <Timer size={48} taskId={taskId} sectionId={sectionId} />
        <Time>
          {renderTime()}
          <Units>min</Units>
        </Time>
      </StyledPomodoro>
      <Stats time={time} />
    </>
  );
};

Pomodoro.propTypes = {
  taskId: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  isTaskActive: PropTypes.bool.isRequired,
  selectedTask: PropTypes.shape({
    time: PropTypes.number.isRequired,
    start: PropTypes.string,
  }).isRequired,
};

export default withTheme(Pomodoro);
