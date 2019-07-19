import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const getColors = props => {
  const colors = {};
  switch (props.intent) {
    case 'primary':
      colors.background = props.theme.blue500;
      break;
    case 'success':
      colors.background = props.theme.green500;
      break;
    case 'neutral':
      colors.background = props.theme.neutral300;
      break;
    default:
      colors.background = props.theme.neutral300;
      break;
  }
  return colors;
};

const CustomRadio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${props => props.theme.neutral100};
  border-radius: 50%;
  transition: all 0.2s ease;

  &:after {
    position: absolute;
    content: '';
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    display: none;
  }
`;

const Label = styled.label`
  position: relative;
  display: flex;
  font-size: 18px;
  user-select: none;
  cursor: pointer;
  height: 25px;
  align-items: center;
  padding-left: 35px;
  color: ${props => props.theme.neutral500};
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:focus {
    & ~ ${CustomRadio} {
      outline: none;
      box-shadow: 0 0 0 4px ${props => props.theme.blue100};
    }
  }

  &:checked {
    ~ ${CustomRadio} {
      background-color: ${props => getColors(props).background};

      &:after {
        display: block;
      }
    }
  }
`;

const Radio = ({ intent, children, ...other }) => {
  return (
    <Label>
      {children}
      <StyledInput intent={intent} type="radio" {...other} />
      <CustomRadio />
    </Label>
  );
};

Radio.defaultProps = {
  intent: 'neutral',
  children: '',
};

Radio.propTypes = {
  intent: PropTypes.oneOf(['primary', 'success', 'neutral']),
  children: PropTypes.string,
};

export default Radio;
