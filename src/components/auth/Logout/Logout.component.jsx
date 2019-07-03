import React from 'react';
import PropTypes from 'prop-types';
import { IconDoorExit } from '../../../icons/Icons';
import { Button } from '../../UI';

const Logout = ({ loading, logoutRequest }) => {
  return (
    <Button
      block
      isLoading={loading}
      intent="dropdown"
      iconBefore={<IconDoorExit />}
      onClick={logoutRequest}
    >
      Log out
    </Button>
  );
};

Logout.propTypes = {
  loading: PropTypes.bool.isRequired,
  logoutRequest: PropTypes.func.isRequired,
};

export default Logout;
