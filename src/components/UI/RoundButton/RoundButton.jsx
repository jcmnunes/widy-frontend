import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Spinner } from '..';

const StyledRoundButton = styled.button`
  display: flex;
  align-items: center;
  height: 36px;
  border-radius: 999px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.theme.neutral700};
  padding: 0 8px;
  position: relative;
  opacity: ${props => (props.disabled && !props.isLoading ? 0.5 : 1)};

  span.children {
    margin: 0 4px;
  }

  &:hover {
    background: ${props => (props.bg ? props.bg : props.theme.neutral050)};

    span.children {
      text-decoration: underline;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${props => props.theme.blue100};
  }

  &:disabled {
    background: ${props => props.theme.neutral050};
    cursor: not-allowed;
  }

  .content {
    visibility: ${props => (props.isLoading ? 'hidden' : 'visible')};
    display: flex;
    align-items: center;
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 18px;
  }
`;

const RoundButton = ({ isLoading, disabled, iconBefore, iconAfter, children, bg, ...other }) => (
  <StyledRoundButton isLoading={isLoading} disabled={disabled || isLoading} {...other} bg={bg}>
    {isLoading && (
      <span className="spinner">
        <Spinner size="small" />
      </span>
    )}
    <div className="content">
      {iconBefore && iconBefore}
      {children && <span className="children">{children}</span>}
      {iconAfter && iconAfter}
    </div>
  </StyledRoundButton>
);

RoundButton.defaultProps = {
  isLoading: false,
  disabled: false,
  iconBefore: null,
  iconAfter: null,
  children: null,
  bg: null,
};

RoundButton.propTypes = {
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  iconBefore: PropTypes.element,
  iconAfter: PropTypes.element,
  children: PropTypes.node,
  bg: PropTypes.string,
};

export default RoundButton;
