import React, { Component } from 'react';
import styled from 'styled-components';
import MainBar from './MainBar/MainBar';
import Navigation from './Navigation';
import Board from './Board';
import Sidebar from './Sidebar';

const StyledEOD = styled.div`
  display: grid;
  grid-template-columns: 8px 254px 1fr;
  height: 100vh;
  transition: all 0.3s ease;
  min-width: ${props => props.theme.bp_small};

  @media (min-width: ${props => props.theme.bp_large}) {
    grid-template-columns: 8px 254px 3fr 2fr;
  }

  @media (min-width: ${props => props.theme.bp_xlarge}) {
    grid-template-columns: 8px 254px 1fr 1fr;
  }
`;

class EOD extends Component {
  render() {
    return (
      <StyledEOD>
        <MainBar />
        <Navigation />
        <Board />
        <Sidebar />
      </StyledEOD>
    );
  }
}

export default EOD;
