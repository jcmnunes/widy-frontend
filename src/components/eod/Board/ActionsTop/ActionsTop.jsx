import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  IconCheveronDown,
  IconCog,
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

const ActionsTop = ({ logoutState: { loading }, logout }) => (
  <StyledActionsTop>
    <RoundButton iconAfter={<IconPresentation />}>Widy Report</RoundButton>
    <Dropdown
      trigger={<RoundButton iconBefore={<IconCheveronDown />} iconAfter={<IconUserCircle />} />}
      position="right"
    >
      <StyledDropdown>
        <Button intent="dropdown" iconBefore={<IconUser />} block>
          Edit profile
        </Button>
        <Button intent="dropdown" iconBefore={<IconCog />} block>
          Settings
        </Button>
        <Button
          block
          loading={loading}
          intent="dropdown"
          iconBefore={<IconDoorExit />}
          onClick={logout}
        >
          Log out
        </Button>
      </StyledDropdown>
    </Dropdown>
  </StyledActionsTop>
);

ActionsTop.propTypes = {
  logoutState: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

export default ActionsTop;
