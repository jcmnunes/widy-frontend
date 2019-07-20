import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components/macro';
import { IconPlay, IconStop } from '../../../icons/Icons';

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
  theme,
  startTask,
  stopTask,
  size,
}) => {
  const [isHover, setIsHover] = useState(false);
  const handleClick = () => {
    if (activeTask.taskId === taskId) {
      stopTask(taskId, sectionId);
    } else {
      startTask(taskId, taskTitle, taskTime, sectionId);
    }
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const renderPlayButton = () => {
    if (activeTask.taskId === taskId && activeTask.inBreak)
      return (
        <IconStop
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          primaryColor={isHover ? theme.blue200 : theme.blue100}
          secondaryColor={isHover ? theme.blue800 : theme.blue700}
          size={size}
        />
      );
    if (activeTask.taskId === taskId)
      return (
        <IconStop
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          primaryColor={isHover ? theme.yellow500 : theme.yellow400}
          secondaryColor={isHover ? theme.yellow900 : theme.yellow900}
          size={size}
        />
      );
    return (
      <IconPlay
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        primaryColor={isHover ? theme.neutral300 : theme.neutral200}
        secondaryColor={isHover ? theme.neutral600 : theme.neutral500}
        size={size}
      />
    );
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
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
  startTask: PropTypes.func.isRequired,
  stopTask: PropTypes.func.isRequired,
  size: PropTypes.number,
};

export default withTheme(Timer);
