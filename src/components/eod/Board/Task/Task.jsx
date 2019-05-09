import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import noop from 'lodash.noop';
import Timer from '../../Timer';
import TaskMenu from '../TaskMenu';
import { Checkbox } from '../../../UI';
import { IconDuplicate } from '../../../../icons/Icons';
import toast from '../../../../helpers/toast';

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

  if (props.isCompleted) {
    colors.border = props.theme.neutral100;
  }

  if (props.isDragging) {
    colors.background = props.theme.blue050;
    colors.border = props.theme.blue050;
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

const StyledIconDuplicate = styled(IconDuplicate)`
  display: none;
  cursor: pointer;
`;

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border: ${props => `1px solid ${getColors(props).border}`};
  border-radius: 4px;
  background-color: ${props => getColors(props).background};
  padding: 8px;
  font-size: 16px;
  margin: 4px 0;
  color: ${props => (props.isCompleted ? props.theme.neutral300 : props.theme.neutral700)};
  text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
  cursor: pointer;
  animation: ${props => getAnimation(props)};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  &:hover {
    background-color: ${props =>
      props.isSelected ? props.theme.yellow075 : props.theme.neutral025};

    ${StyledIconDuplicate} {
      display: inline-block;
    }
  }
`;

const TaskName = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 0;
  margin-right: 16px;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    margin-left: 4px;
  }
`;

const Control = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.neutral100};
  }
`;

const Task = ({
  taskRef,
  taskId,
  sectionId,
  isSelected,
  isActive,
  isInBreak,
  isCompleted,
  renderControls,
  onClick,
  onDoubleClick,
  onCheckChange,
  onCheckClick,
  storeSelectedSectionId,
  storeSelectedTaskId,
  openModal,
  isDragging,
  children,
  ...other
}) => (
  <StyledTask
    ref={taskRef}
    isSelected={isSelected}
    isActive={isActive}
    isInBreak={isInBreak}
    isCompleted={isCompleted}
    onClick={onClick}
    storeSelectedSectionId={storeSelectedSectionId}
    isDragging={isDragging}
    {...other}
  >
    <Checkbox checked={isCompleted} onChange={onCheckChange} onClick={onCheckClick} />
    <TaskName onDoubleClick={onDoubleClick}>{children}</TaskName>
    <CopyToClipboard
      text={children}
      onCopy={() =>
        toast.success({
          title: 'Success',
          message: 'Task title copied',
        })
      }
    >
      <StyledIconDuplicate />
    </CopyToClipboard>
    {renderControls && !isCompleted && (
      <Controls>
        <Timer taskId={taskId} sectionId={sectionId} />
        <Control>
          <TaskMenu
            taskId={taskId}
            sectionId={sectionId}
            storeSelectedSectionId={storeSelectedSectionId}
            storeSelectedTaskId={storeSelectedTaskId}
            openModal={openModal}
          />
        </Control>
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
  isCompleted: PropTypes.bool.isRequired,
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
  isDragging: PropTypes.bool.isRequired,
};

export default Task;
