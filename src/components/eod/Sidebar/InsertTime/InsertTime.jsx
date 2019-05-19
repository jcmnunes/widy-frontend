import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconTime } from '../../../../icons/Icons';
import { Button } from '../../../UI';
import { INSERT_TIME } from '../../../modals/types';

const StyledInsertTime = styled.div`
  margin-top: 12px;
`;

const InsertTime = ({
  isSelectedTaskActive,
  isSelectedTaskInPlan,
  isSelectedTaskCompleted,
  openModal,
}) => {
  const canInsertTime = () =>
    !(isSelectedTaskInPlan || isSelectedTaskActive || isSelectedTaskCompleted);

  const handleOnClick = () => openModal(INSERT_TIME);

  return canInsertTime() ? (
    <StyledInsertTime>
      <Button iconBefore={<IconTime />} onClick={handleOnClick}>
        Insert Time
      </Button>
    </StyledInsertTime>
  ) : null;
};

InsertTime.propTypes = {
  isSelectedTaskActive: PropTypes.bool.isRequired,
  isSelectedTaskInPlan: PropTypes.bool.isRequired,
  isSelectedTaskCompleted: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default InsertTime;
