import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMainBar = styled.div`
  background: ${props => props.theme.yellow500};
`;

class MainBar extends Component {
  render() {
    return (
      <StyledMainBar>

      </StyledMainBar>
    );
  }
}

export default MainBar;
