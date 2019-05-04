import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import SidebarHeader from './SidebarHeader';
import NotesEditor from './NotesEditor';
import Pomodoro from '../Pomodoro';
import { Button } from '../../UI';
import { Heading2 } from '../../UI/Typography';
import { IconLaunch } from '../../../icons/Icons';
import { IllustrationTodoList } from '../../../icons/Illustrations';
import { LAUNCH_TASK } from '../../modals/types';

const StyledSidebar = styled.div`
  background: ${props => props.theme.yellow050};
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.1);
  padding: 32px;
  z-index: 6000;

  @media (min-width: ${props => props.theme.bp_large}) {
    grid-template-columns: 8px 254px 3fr 2fr;
    display: block;
    position: relative;
    width: auto;
    top: auto;
    right: auto;
    height: auto;
    box-shadow: none;
  }
`;

const StyledHeading = styled.h2`
  margin-bottom: 12px;
  color: ${props => props.theme.neutral700};
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;

const Title = styled.h2`
  font-size: 16px;
  color: ${props => props.theme.neutral400};
  margin-top: 24px;
`;

const Sidebar = ({
  isOpen,
  selectedTaskId,
  isSelectedTaskInPlan,
  openModal,
  closeSidebar,
  theme,
}) => {
  const handleLaunchClick = () => {
    openModal(LAUNCH_TASK);
  };

  const renderLaunchIcon = () => (
    <IconLaunch primaryColor={theme.neutral600} secondaryColor={theme.neutral300} />
  );

  return (
    <StyledSidebar isOpen={isOpen}>
      {selectedTaskId ? (
        <>
          <SidebarHeader closeSidebar={closeSidebar} />
          <StyledHeading>Notes:</StyledHeading>
          <NotesEditor />
          <Heading2>Time Management</Heading2>
          {isSelectedTaskInPlan ? (
            <Button iconBefore={renderLaunchIcon()} onClick={handleLaunchClick}>
              Launch task
            </Button>
          ) : (
            <Pomodoro />
          )}
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
  isOpen: PropTypes.bool.isRequired,
  selectedTaskId: PropTypes.string.isRequired,
  isSelectedTaskInPlan: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
};

export default withTheme(Sidebar);
