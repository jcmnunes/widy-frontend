import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Label, Input } from '..';

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  .form-helper {
    color: ${props => props.theme.red400};
    font-size: 14px;
    padding: 6px;
  }
`;

const InputField = ({ label, placeholder, value, name, type, error, onChange, ...other }) => (
  <StyledInputField>
    {!!label && (
      <Label htmlFor={name} style={{ marginBottom: 12 }}>
        {label}
      </Label>
    )}
    <Input
      invalid
      type={type}
      value={value}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={onChange}
      {...other}
    />
    {error.length > 0 && <div className="form-helper">{error}</div>}
  </StyledInputField>
);

InputField.defaultProps = {
  error: '',
  label: null,
  placeholder: '',
  value: '',
};

InputField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
