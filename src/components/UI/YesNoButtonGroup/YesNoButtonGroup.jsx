import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { IconCheck, IconClose } from '../../../icons/Icons';
import Button from '../Button';

const StyledYesNoButtonGroup = styled.div`
  display: flex;
  height: 48px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 4px;
`;

const YesNoButtonGroup = ({ theme, cancelAction }) => {
  return (
    <StyledYesNoButtonGroup>
      <Button size="small" type="submit">
        <IconCheck size={22} />
      </Button>
      <Button size="small" type="button" onClick={cancelAction}>
        <IconClose size={22} primaryColor={theme.red400} />
      </Button>
    </StyledYesNoButtonGroup>
  );
};

YesNoButtonGroup.propTypes = {
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
  cancelAction: PropTypes.func.isRequired,
};

export default withTheme(YesNoButtonGroup);
