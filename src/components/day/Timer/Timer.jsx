import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { IconPlay, IconStop } from './Timer.styles';

const StyledTimer = styled.div`
  cursor: pointer;
  height: ${props => (props.size ? `${props.size}px` : '24px')};
`;

const Timer = ({
  taskId,
  taskTitle,
  taskTime,
  sectionId,
  activeTask,
  startTask,
  stopTask,
  size,
}) => {
  const handleClick = () => {
    if (activeTask.taskId === taskId) {
      stopTask(taskId, sectionId);
    } else {
      startTask(taskId, taskTitle, taskTime, sectionId);
    }
  };

  const renderPlayButton = () => {
    if (activeTask.taskId === taskId) {
      return <IconStop inBreak={activeTask.inBreak} size={size} />;
    }
    return <IconPlay size={size} />;
  };

  return (
    <StyledTimer onClick={handleClick} size={size}>
      {renderPlayButton()}
    </StyledTimer>
  );
};

Timer.defaultProps = {
  size: undefined,
};

Timer.propTypes = {
  taskId: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  taskTime: PropTypes.number.isRequired,
  sectionId: PropTypes.string.isRequired,
  activeTask: PropTypes.shape({
    taskId: PropTypes.string.isRequired,
    inBreak: PropTypes.bool.isRequired,
  }).isRequired,
  startTask: PropTypes.func.isRequired,
  stopTask: PropTypes.func.isRequired,
  size: PropTypes.number,
};

export default Timer;
