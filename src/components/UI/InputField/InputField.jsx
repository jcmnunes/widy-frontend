import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../Label';
import Input from '../Input';

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

class InputField extends Component {
  render() {
    const { label, placeholder, value, name, type, error, onChange, ...other } = this.props;
    return (
      <StyledInputField>
        {!!label && (
          <Label htmlFor={name} style={{ marginBottom: 12 }}>
            {label}
          </Label>
        )}
        <Input
          invalid={true}
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
  }
}

InputField.defaultProps = {
  error: '',
  label: null,
};

InputField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
};

export default InputField;
