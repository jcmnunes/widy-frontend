import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@binarycapsule/ui-capsules';
import SidebarHeader from './SidebarHeader';
import NotesEditor from './NotesEditor';
import Pomodoro from '../Pomodoro';
import { Heading2 } from '../../common/Typography';
import { IllustrationTodoList } from '../../../icons/Illustrations';
import { LAUNCH_TASK } from '../../modals/types';
import RegisterTime from './RegisterTime';
import { EmptyState, StyledSidebar, Title } from './SidebarStyles';

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
            <Button iconBefore="ROCKET" onClick={handleLaunchClick}>
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
