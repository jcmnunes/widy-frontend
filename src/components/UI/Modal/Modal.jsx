import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { AddTask, LaunchTask, RenameTask } from '../../modals';
import * as types from '../../modals/types';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(250, 250, 250, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7000;

  .modal {
    border: 6px solid ${props => props.theme.neutral200};
    width: 640px;
    background: white;
    box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.1);
  }

  .header {
    text-align: right;
    height: 36px;
    padding: 4px;

    .close {
      display: inline-block;
      cursor: pointer;
      width: 36px;
      height: 36px;

      &:focus {
        outline: none;
        box-shadow: inset 0 0 0 4px ${props => props.theme.blue100};
      }
    }
  }

  .body {
    padding: 32px;

    .title {
      font-size: 24px;
      margin-bottom: 16px;
      color: ${props => props.theme.neutral700};
    }

    .sub-title {
      font-size: 18px;
      margin-bottom: 16px;
      color: ${props => props.theme.neutral500};
    }
  }

  .footer {
    background: ${props => props.theme.neutral050};
    padding: 24px 32px;
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 16px;
    }
  }
`;

const Modal = ({ modal }) => {
  switch (modal) {
    case types.ADD_TASK:
      return <AddTask />;
    case types.LAUNCH_TASK:
      return <LaunchTask />;
    case types.RENAME_TASK:
      return <RenameTask />;
    default:
      return null;
  }
};

Modal.propTypes = {
  modal: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  modal: state.modals.modal,
});

export default connect(mapStateToProps)(Modal);
