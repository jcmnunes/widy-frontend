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
    const { loading } = this.props.logout;
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
            <Button
              block
              loading={loading}
              intent="dropdown"
              iconBefore={<IconDoorExit />}
              onClick={this.props.logoutThunk}
            >
              Log out
            </Button>
          </StyledDropdown>
        </Dropdown>
      </StyledActionsTop>
    );
  }
}

export default ActionsTop;
