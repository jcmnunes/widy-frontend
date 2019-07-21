import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from '../../../../helpers/toast';
import { StyledButton, IconDuplicate } from './TaskCopyButton.styles';

const TaskCopyButtonComponent = ({ taskTitle, shouldStopPropagation, ...other }) => {
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
      {...other}
    >
      <StyledButton
        type="button"
        onClick={event => shouldStopPropagation && event.stopPropagation()}
      >
        <IconDuplicate />
      </StyledButton>
    </CopyToClipboard>
  );
};

TaskCopyButtonComponent.defaultProps = {
  shouldStopPropagation: true,
};

TaskCopyButtonComponent.propTypes = {
  taskTitle: PropTypes.string.isRequired,
  shouldStopPropagation: PropTypes.bool,
};

export default TaskCopyButtonComponent;
