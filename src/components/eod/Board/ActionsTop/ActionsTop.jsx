import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Logout from '../../../auth/Logout/Logout.container';
import {
  IconCheveronDown,
  IconCog,
  IconPresentation,
  IconSurvey,
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

const ActionsTop = ({ noDays, theme }) => (
  <StyledActionsTop>
    <RoundButton
      iconAfter={<IconSurvey primaryColor={theme.neutral200} secondaryColor={theme.neutral600} />}
      disabled={noDays}
    >
      Widy Report
    </RoundButton>
    <RoundButton iconAfter={<IconPresentation />} disabled={noDays}>
      Standup
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

ActionsTop.propTypes = {
  noDays: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
};

export default ActionsTop;
