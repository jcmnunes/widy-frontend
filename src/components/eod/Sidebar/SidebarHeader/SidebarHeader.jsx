import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled, { withTheme } from 'styled-components';
import { IconClose } from '../../../../icons/Icons';
import RoundButton from '../../../UI/RoundButton';
import EditableInput from '../../../UI/EditableInput';

const StyledSidebarHeader = styled.div`
  color: ${props => props.theme.neutral700};
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledRoundButton = styled(RoundButton)`
  display: inline-block;

  @media (min-width: ${props => props.theme.bp_large}) {
    display: none;
  }
`;

const SidebarHeader = ({ closeSidebar, theme, selectedTask, selectedDay, updateTask }) => {
  const updateTaskTitle = title => {
    const payload = { title };
    updateTask(selectedTask.id, payload);
  };

  return (
    <StyledSidebarHeader>
      <TopBar>
        <div>{selectedDay ? moment(selectedDay.day).format('ddd DD MMM YYYY') : ''}</div>
        <StyledRoundButton
          iconAfter={<IconClose primaryColor={theme.neutral700} />}
          onClick={closeSidebar}
          bg={theme.yellow050}
        >
          Close
        </StyledRoundButton>
      </TopBar>
      <EditableInput
        initialValue={selectedTask ? selectedTask.title : ''}
        action={updateTaskTitle}
      />
    </StyledSidebarHeader>
  );
};

SidebarHeader.defaultProps = {
  selectedDay: '',
};

SidebarHeader.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
  selectedTask: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectedDay: PropTypes.shape({
    day: PropTypes.string.isRequired,
  }),
  updateTask: PropTypes.func.isRequired,
};

export default withTheme(SidebarHeader);
