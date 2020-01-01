import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownItem, IconButton } from '@binarycapsule/ui-capsules';
import { useHistory } from 'react-router-dom';
import { StyledActionsTop } from './ActionsTop.styles';

const ActionsTop = ({ selectedDayId, isLogoutLoading, logoutRequest }) => {
  const history = useHistory();

  return (
    <StyledActionsTop>
      <IconButton
        text="Widy report"
        icon="SURVEY"
        isRound
        hasBackground
        onClick={() => history.push(`/report/${selectedDayId}`)}
      />
      <Dropdown
        placement="right"
        trigger={<IconButton hasBackground hasChev icon="USER_CIRCLE" isRound />}
      >
        <DropdownItem
          text="Settings"
          icon="SETTINGS"
          handleAction={() => history.push('/settings/account')}
        />
        <DropdownItem
          text="Log out"
          icon="LOGOUT"
          handleAction={logoutRequest}
          isLoading={isLogoutLoading}
          closeOnAction={false}
        />
      </Dropdown>
    </StyledActionsTop>
  );
};

ActionsTop.propTypes = {
  selectedDayId: PropTypes.string.isRequired,
  isLogoutLoading: PropTypes.bool.isRequired,
  logoutRequest: PropTypes.func.isRequired,
};

export default ActionsTop;
