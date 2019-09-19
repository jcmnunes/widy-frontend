import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownItem, IconButton } from '@binarycapsule/ui-capsules';
import { StyledActionsTop } from './ActionsTop.styles';

const ActionsTop = ({ isLogoutLoading, logoutRequest }) => (
  <StyledActionsTop>
    <IconButton text="Widy report" icon="SURVEY" isRound hasBackground onClick={() => {}} />
    <Dropdown
      placement="right"
      trigger={<IconButton hasBackground hasChev icon="USER_CIRCLE" isRound />}
    >
      <DropdownItem
        text="Log out"
        isLoading={isLogoutLoading}
        icon="LOGOUT"
        handleAction={logoutRequest}
        closeOnAction={false}
      />
    </Dropdown>
  </StyledActionsTop>
);

ActionsTop.propTypes = {
  isLogoutLoading: PropTypes.bool.isRequired,
  logoutRequest: PropTypes.func.isRequired,
};

export default ActionsTop;
