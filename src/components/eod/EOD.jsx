import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MainBar from './MainBar/MainBar';
import Navigation from './Navigation';
import Board from './Board';
import SideBar from './SideBar';
import logoutThunk from '../../thunks/logout';

const StyledEOD = styled.div`
  display: grid;
  grid-template-columns: 8px 254px 1fr 1fr;
  height: 100vh;
  transition: all 0.3s ease;
`;

class EOD extends Component {
  state = { isOpen: false };

  handleOnCLick = () => {
    this.props.logoutThunk();
  };

  render() {
    return (
      <StyledEOD isOpen={this.state.isOpen}>
        <MainBar />
        <Navigation />
        <Board />
        <SideBar>
          <button onClick={this.handleOnCLick}>Logout</button>
        </SideBar>
      </StyledEOD>
    );
  }
}

export default connect(
  null,
  { logoutThunk },
)(EOD);
