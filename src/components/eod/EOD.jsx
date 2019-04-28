import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import MainBar from './MainBar';
import Navigation from './Navigation';
import Board from './Board';
import Sidebar from './Sidebar';
import { getCurrentPomodoroInfo } from '../../helpers/pomodoro';

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

let timer = null;

const EOD = ({ activeTaskId, activeTaskTime, activeTaskStart, updateActiveTask }) => {
  const updateTaskState = () => {
    const time = activeTaskTime + moment().diff(activeTaskStart, 'seconds');
    const { inBreak } = getCurrentPomodoroInfo(time);
    updateActiveTask({ inBreak }); // TODO ➜ Dispatch only when inBreak changes
  };

  useEffect(() => {
    updateTaskState();
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    if (activeTaskId) {
      timer = setInterval(updateTaskState, 1000);
    }
    return () => clearInterval(timer);
  }, [activeTaskId, activeTaskTime, activeTaskStart]);

  return (
    <StyledEOD>
      <MainBar />
      <Navigation />
      <Board />
      <Sidebar />
    </StyledEOD>
  );
};

EOD.defaultProps = {
  activeTaskStart: null,
};

EOD.propTypes = {
  activeTaskId: PropTypes.string.isRequired,
  activeTaskTime: PropTypes.number.isRequired,
  activeTaskStart: PropTypes.string,
  updateActiveTask: PropTypes.func.isRequired,
};

export default EOD;
