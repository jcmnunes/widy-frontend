import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getColors = props => {
  const colors = {
    background: props.theme.neutral300,
  };
  switch (props.intent) {
    case 'primary':
      colors.background = props.theme.blue500;
      break;
    case 'success':
      colors.background = props.theme.green500;
      break;
    default:
      break;
  }
  return colors;
};

const StyledCheckbox = styled.label`
  display: flex;
  height: 25px;
  align-items: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 18px;
  user-select: none;
  color: ${props => props.theme.neutral500};

  .checkmark {
    position: absolute;
    border-radius: 4px;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${props => props.theme.neutral100};

    &:after {
      content: '';
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 7px;
      height: 12px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:focus {
      & ~ .checkmark {
        outline: none;
        box-shadow: 0 0 0 4px ${props => props.theme.blue100};
      }
    }

    &:checked {
      & ~ .checkmark {
        background-color: ${props => getColors(props).background};

        &:after {
          display: block;
        }
      }
    }
  }
`;

const Checkbox = ({ children, intent, onClick, ...other }) => (
  <StyledCheckbox intent={intent} onClick={onClick}>
    {children}
    <input type="checkbox" {...other} />
    <span className="checkmark" />
  </StyledCheckbox>
);

Checkbox.defaultProps = {
  children: '',
  intent: 'neutral',
};

Checkbox.propTypes = {
  children: PropTypes.string,
  intent: PropTypes.oneOf(['primary', 'success', 'neutral']),
  onClick: PropTypes.func.isRequired,
};

export default Checkbox;
