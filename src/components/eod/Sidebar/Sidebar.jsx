import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SidebarHeader from './SidebarHeader';
import NotesEditor from './NotesEditor';

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

const Sidebar = ({ isOpen, selectedTaskId, closeSidebar }) => (
  <StyledSidebar isOpen={isOpen}>
    {selectedTaskId ? (
      <>
        <SidebarHeader closeSidebar={closeSidebar} />
        <StyledHeading>Notes:</StyledHeading>
        <NotesEditor />
      </>
    ) : (
      <div>Select a task to see info</div>
    )}
  </StyledSidebar>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  selectedTaskId: PropTypes.string.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
