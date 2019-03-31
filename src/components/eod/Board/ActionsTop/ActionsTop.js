import React, { Component } from 'react';
import styled from 'styled-components';
import {
  IconCheveronDown,
  IconDoorExit,
  IconPresentation,
  IconUser,
  IconUserCircle,
} from '../../../../icons/Icons';
import { Dropdown, StyledDropdown, Button, RoundButton } from '../../../UI';

const StyledActionsTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-left: 12px;
  }
`;

class ActionsTop extends Component {
  render() {
    return (
      <StyledActionsTop>
        <RoundButton iconAfter={<IconPresentation />}>Standup</RoundButton>
        <Dropdown
          trigger={<RoundButton iconBefore={<IconCheveronDown />} iconAfter={<IconUserCircle />} />}
          position="right"
        >
          <StyledDropdown>
            <Button intent="dropdown" iconBefore={<IconUser />} block>
              Edit profile
            </Button>
            <Button intent="dropdown" iconBefore={<IconDoorExit />} block>
              Log out
            </Button>
          </StyledDropdown>
        </Dropdown>
      </StyledActionsTop>
    );
  }
}

export default ActionsTop;
