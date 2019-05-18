import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from '../../../../../helpers/toast';
import { IconDuplicate } from '../../../../../icons/Icons';

const CopyButton = ({ taskTitle, theme, ...other }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <CopyToClipboard
      text={taskTitle}
      onCopy={() =>
        toast.success({
          title: 'Done!',
          message: 'Task title copied',
        })
      }
      data-test="copy-button"
    >
      <IconDuplicate
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        primaryColor={isHover ? theme.neutral400 : theme.neutral300}
        secondaryColor={isHover ? theme.neutral300 : theme.neutral200}
        {...other}
      />
    </CopyToClipboard>
  );
};

CopyButton.propTypes = {
  taskTitle: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
};

export default CopyButton;
