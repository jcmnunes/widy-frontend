import React, { Component } from 'react';
import styled from 'styled-components';
import { IconPresentation, IconCheveronDown, IconUserCircle } from '../../../../icons/Icons';
import { RoundButton } from '../../../UI';

const StyledActionsTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    margin-left: 12px;
  }
`;

class ActionsTop extends Component {
  render() {
    return (
      <StyledActionsTop>
        <RoundButton iconAfter={<IconPresentation />}>Standup</RoundButton>
        <RoundButton iconBefore={<IconCheveronDown />} iconAfter={<IconUserCircle />} />
      </StyledActionsTop>
    );
  }
}

export default ActionsTop;
