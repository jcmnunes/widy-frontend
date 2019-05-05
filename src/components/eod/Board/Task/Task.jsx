import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import noop from 'lodash.noop';
import Timer from '../../Timer';
import TaskMenu from '../TaskMenu';
import { Checkbox } from '../../../UI';

const getColors = props => {
  const colors = {
    border: props.theme.neutral200,
    background: 'white',
  };

  if (props.isSelected) {
    colors.border = props.theme.yellow500;
    colors.background = props.theme.yellow050;
  }

  if (props.isInBreak) {
    colors.border = props.theme.blue200;
  }

  return colors;
};

const pulseAnimationIsActive = props => keyframes`
  from {
    border-color: ${props.theme.yellow100};
    box-shadow: 0 0 0 4px ${props.theme.yellow050};
  }

  to {
    border-color: ${props.theme.yellow700};
    box-shadow: 0 0 0 4px ${props.theme.yellow200};
  }
`;

const pulseAnimationInBreak = props => keyframes`
  from {
    border-color: ${props.theme.blue050};
    box-shadow: 0 0 0 4px ${props.theme.blue050};
  }

  to {
    border-color: ${props.theme.blue400};
    box-shadow: 0 0 0 4px ${props.theme.blue100};
  }
`;

const getAnimation = props => {
  if (props.isInBreak) return pulseAnimationInBreak(props);
  if (props.isActive) return pulseAnimationIsActive(props);
  return null;
};

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border: ${props => `1px solid ${getColors(props).border}`};
  border-radius: 4px;
  background: ${props => getColors(props).background};
  padding: 8px;
  font-size: 16px;
  margin: 4px 0;
  color: ${props => props.theme.neutral700};
  cursor: pointer;
  animation: ${props => getAnimation(props)};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const TaskName = styled.span`
  flex: 1;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    margin-left: 4px;
  }
`;

const Task = ({
  taskRef,
  taskId,
  sectionId,
  isSelected,
  isActive,
  isInBreak,
  renderControls,
  onClick,
  onDoubleClick,
  onCheckChange,
  onCheckClick,
  storeSelectedSectionId,
  storeSelectedTaskId,
  openModal,
  children,
  ...other
}) => (
  <StyledTask
    ref={taskRef}
    isSelected={isSelected}
    isActive={isActive}
    isInBreak={isInBreak}
    onClick={onClick}
    storeSelectedSectionId={storeSelectedSectionId}
    {...other}
  >
    <Checkbox onChange={onCheckChange} onClick={onCheckClick} />
    <TaskName onDoubleClick={onDoubleClick}>{children}</TaskName>
    {renderControls && (
      <Controls>
        <Timer taskId={taskId} sectionId={sectionId} />
        <TaskMenu
          taskId={taskId}
          sectionId={sectionId}
          storeSelectedSectionId={storeSelectedSectionId}
          storeSelectedTaskId={storeSelectedTaskId}
          openModal={openModal}
        />
      </Controls>
    )}
  </StyledTask>
);

Task.defaultProps = {
  taskRef: null,
  renderControls: true,
  onClick: noop,
  onDoubleClick: noop,
  onCheckChange: noop,
  onCheckClick: noop,
  storeSelectedTaskId: noop,
  storeSelectedSectionId: noop,
  openModal: noop,
};

Task.propTypes = {
  taskRef: PropTypes.func,
  renderControls: PropTypes.bool,
  taskId: PropTypes.string.isRequired,
  sectionId: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  isInBreak: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onCheckChange: PropTypes.func,
  onCheckClick: PropTypes.func,
  storeSelectedTaskId: PropTypes.func,
  storeSelectedSectionId: PropTypes.func,
  openModal: PropTypes.func,
};

export default Task;
