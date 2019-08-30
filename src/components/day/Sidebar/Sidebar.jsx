import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from './SidebarHeader';
import NotesEditor from './NotesEditor';
import Pomodoro from '../Pomodoro';
import { Button } from '../../UI';
import { Heading2 } from '../../UI/Typography';
import { IllustrationTodoList } from '../../../icons/Illustrations';
import { LAUNCH_TASK } from '../../modals/types';
import RegisterTime from './RegisterTime';
import { EmptyState, StyledSidebar, Title, IconLaunch } from './SidebarStyles';

const Sidebar = ({ selectedTaskId, isSelectedTaskInPlan, openModal }) => {
  const handleLaunchClick = () => {
    openModal(LAUNCH_TASK);
  };

  return (
    <StyledSidebar>
      {selectedTaskId ? (
        <>
          <SidebarHeader />
          <Heading2>Notes:</Heading2>
          <NotesEditor />
          <Heading2>Time Management</Heading2>
          {isSelectedTaskInPlan ? (
            <Button iconBefore={<IconLaunch />} onClick={handleLaunchClick}>
              Launch task
            </Button>
          ) : (
            <Pomodoro />
          )}
          <RegisterTime />
        </>
      ) : (
        <EmptyState>
          <IllustrationTodoList />
          <Title>Select a task to see more info here</Title>
        </EmptyState>
      )}
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  selectedTaskId: PropTypes.string.isRequired,
  isSelectedTaskInPlan: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Sidebar;
