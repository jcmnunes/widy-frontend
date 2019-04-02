import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  background: ${props => props.theme.yellow050};
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.1);

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

class Sidebar extends Component {
  closeSidebar = () => {
    this.props.closeSidebar();
  };

  render() {
    const { isOpen } = this.props;
    return (
      <StyledSidebar isOpen={isOpen}>
        <button onClick={this.closeSidebar}>X</button>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
