import React from 'react';
import PropTypes from 'prop-types';
import Logout from '../../auth/Logout/Logout.container';
import { Dropdown, StyledDropdown, Button, RoundButton } from '../../UI';
import {
  IconCheveronDown,
  IconCog,
  IconSurvey,
  IconUser,
  IconUserCircle,
  StyledActionsTop,
} from './ActionsTop.styles';

const ActionsTopComponent = ({ noDays }) => (
  <StyledActionsTop>
    <RoundButton iconAfter={<IconSurvey />} disabled={noDays}>
      Widy Report
    </RoundButton>
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
        <Logout />
      </StyledDropdown>
    </Dropdown>
  </StyledActionsTop>
);

ActionsTopComponent.propTypes = {
  noDays: PropTypes.bool.isRequired,
};

export default ActionsTopComponent;
