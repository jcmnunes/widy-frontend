import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const getColors = props => {
  const colors = {
    text: props.theme.blue600,
    disabled: props.theme.blueDisabled,
  };

  switch (props.intent) {
    case 'secondary':
      colors.text = props.theme.neutral600;
      colors.disabled = props.theme.neutralDisabled;
      break;
    case 'warning':
      colors.text = props.theme.yellow600;
      colors.disabled = props.theme.yellowDisabled;
      break;
    case 'error':
      colors.text = props.theme.red600;
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
    box-shadow: 0 0 0 4px ${props => props.theme.blue200};
  }

  &:disabled {
    color: ${props => getColors(props).disabled};
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  ${LinkStyles}
  border: none;
  cursor: pointer;
  padding-left: 0;
  margin-left: 4px;
`;

const StyledLink = styled(Link)`
  ${LinkStyles}
`;

const StyledAnchor = styled.a`
  ${LinkStyles}
`;

class WidyLink extends Component {
  render() {
    const { children, to, intent, onClick, disabled, size, ...other } = this.props;
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
  }
}

WidyLink.defaultProps = {
  to: null,
  intent: null,
  onClick: null,
  disabled: false,
  size: 'medium',
};

WidyLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  intent: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large']),
};

export default WidyLink;
