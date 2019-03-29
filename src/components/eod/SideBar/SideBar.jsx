import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.div`
  background: ${props => props.theme.yellow100};
`;

class SideBar extends Component {
  render() {
    return <StyledSideBar>{this.props.children}</StyledSideBar>;
  }
}

export default SideBar;
