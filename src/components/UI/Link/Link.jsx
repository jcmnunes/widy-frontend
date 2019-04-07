import React from 'react';
import PropTypes from 'prop-types';
import { Link as RRLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const getColors = props => {
  const colors = {
    text: props.theme.blue500,
    disabled: props.theme.blueDisabled,
  };

  switch (props.intent) {
    case 'secondary':
      colors.text = props.theme.neutral500;
      colors.disabled = props.theme.neutralDisabled;
      break;
    case 'warning':
      colors.text = props.theme.yellow500;
      colors.disabled = props.theme.yellowDisabled;
      break;
    case 'error':
      colors.text = props.theme.red500;
      colors.disabled = props.theme.redDisabled;
      break;
    default:
      break;
  }
  return colors;
};

const LinkStyles = css`
  color: ${props => getColors(props).text};
  font-size: ${props => (props.size === 'large' ? '18px' : '16px')};
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${props => props.theme.blue100};
  }

  &:disabled {
    color: ${props => getColors(props).disabled};
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  ${LinkStyles};
  border: none;
  cursor: pointer;
  padding-left: 0;
  margin-left: 4px;
`;

const StyledLink = styled(RRLink)`
  ${LinkStyles}
`;

const StyledAnchor = styled.a`
  ${LinkStyles}
`;

const Link = ({ children, to, intent, onClick, disabled, size, ...other }) => {
  if (!to) {
    return (
      <StyledButton
        type="button"
        intent={intent}
        onClick={onClick}
        disabled={disabled}
        size={size}
        {...other}
      >
        {children}
      </StyledButton>
    );
  }
  // In the code below it is assumed that an internal link will start with
  // exactly one slash and that everything else is external.
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return (
      <StyledLink to={to} intent={intent} size={size} {...other}>
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledAnchor href={to} intent={intent} size={size} {...other}>
      {children}
    </StyledAnchor>
  );
};

Link.defaultProps = {
  to: null,
  intent: null,
  onClick: null,
  disabled: false,
  size: 'medium',
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  intent: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large']),
};

export default Link;
