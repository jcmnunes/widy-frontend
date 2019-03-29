import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from './Spinner';

const getButtonColors = props => {
  const colors = {
    text: props.disabled ? '#CAD2D9' : props.theme.neutral600,
    gradient: {
      top: props.theme.neutral100,
      topHover: '#D7DBE0',
      bottom: props.theme.neutral100,
      bottomHover: '#D7DBE0',
    },
    active: props.theme.neutral200,
    disabled: '#F5F7FA',
  };
  switch (props.intent) {
    case 'primary':
      colors.text = '#FFF';
      colors.gradient.top = props.theme.blue500;
      colors.gradient.topHover = props.theme.blue600;
      colors.gradient.bottom = props.theme.blue600;
      colors.gradient.bottomHover = props.theme.blue700;
      colors.active = props.theme.blue700;
      colors.disabled = '#A8D1EB';
      break;
    case 'error':
      colors.text = '#FFF';
      colors.gradient.top = props.theme.red500;
      colors.gradient.topHover = props.theme.red600;
      colors.gradient.bottom = props.theme.red600;
      colors.gradient.bottomHover = props.theme.red700;
      colors.active = props.theme.red700;
      colors.disabled = '#FFBCC2';
      break;
    case 'warning':
      colors.text = '#FFF';
      colors.gradient.top = props.theme.yellow600;
      colors.gradient.topHover = props.theme.yellow700;
      colors.gradient.bottom = props.theme.yellow700;
      colors.gradient.bottomHover = props.theme.yellow800;
      colors.active = props.theme.yellow800;
      colors.disabled = '#F4D2B5';
      break;
    case 'success':
      colors.text = '#FFF';
      colors.gradient.top = props.theme.green500;
      colors.gradient.topHover = props.theme.green600;
      colors.gradient.bottom = props.theme.green600;
      colors.gradient.bottomHover = props.theme.green700;
      colors.active = props.theme.green700;
      colors.disabled = '#AFE1D5';
      break;
    default:
      break;
  }
  return colors;
};

const StyledButton = styled.button`
  position: relative;
  height: ${props => (props.size === 'large' ? '48px' : '32px')};
  color: ${props => getButtonColors(props).text};
  border-radius: 4px;
  border: none;
  font-size: ${props => (props.size === 'large' ? '18px' : '16px')};
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  padding: ${props => (props.size === 'large' ? '12px 16px' : '4px 12px')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.block ? '100%' : 'auto')};
  background: ${props => `linear-gradient(to bottom,
    ${getButtonColors(props).gradient.top},
    ${getButtonColors(props).gradient.bottom}
  )`};

  &::placeholder {
    color: ${props => props.theme.neutral300};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${props => props.theme.blue100};
  }

  &:hover {
    background: ${props => `linear-gradient(to bottom,
      ${getButtonColors(props).gradient.topHover},
      ${getButtonColors(props).gradient.bottomHover}
    )`};
  }

  &:active {
    background: ${props => getButtonColors(props).active};
  }

  &:disabled {
    background: ${props => getButtonColors(props).disabled};
    cursor: not-allowed;
  }

  .content {
    visibility: ${props => (props.loading ? 'hidden' : 'visible')};
    display: flex;
    align-items: center;
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: ${props => (props.size === 'large' ? '24px' : '18px')};
  }
`;

class Button extends Component {
  render() {
    const { loading, disabled, iconBefore, iconAfter, intent, size, ...other } = this.props;
    return (
      <StyledButton
        disabled={disabled || loading}
        loading={loading}
        intent={intent}
        size={size}
        {...other}
      >
        {loading && (
          <span className="spinner">
            <Spinner size={size} intent={intent} />
          </span>
        )}
        <div className="content">
          {iconBefore && iconBefore}
          {<span>{this.props.children}</span>}
          {iconAfter && iconAfter}
        </div>
      </StyledButton>
    );
  }
}

Button.defaultProps = {
  loading: false,
  disabled: false,
  iconBefore: null,
  iconAfter: null,
  intent: 'secondary',
  size: 'medium',
  type: 'button',
  block: false,
};

Button.propTypes = {
  intent: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['medium', 'large']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  iconBefore: PropTypes.element,
  iconAfter: PropTypes.element,
  type: PropTypes.string,
  block: PropTypes.bool,
};

export default Button;
