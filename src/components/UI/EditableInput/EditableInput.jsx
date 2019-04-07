import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconEdit } from '../../../icons/Icons';
import Input from '../Input';
import YesNoButtonGroup from '../YesNoButtonGroup';

const StyledEditableInput = styled.form`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const Value = styled.span`
  margin-right: 16px;
  cursor: pointer;
`;

const StyledIconEdit = styled(IconEdit)`
  cursor: pointer;
`;

class EditableInput extends Component {
  state = {
    value: '',
    editing: false,
    prevValue: '',
  };

  startEditing = () => {
    const { initialValue } = this.props;
    this.setState(prevState => ({
      editing: true,
      prevValue: prevState.value,
      value: initialValue,
    }));
  };

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleCancel = () => {
    this.setState(prevState => ({ editing: false, value: prevState.prevValue }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { initialValue } = this.props;
    const { value } = this.state;
    if (!value) return;
    value !== initialValue && this.props.action(value);
    this.setState({ editing: false });
  };

  render() {
    const { editing, value } = this.state;
    const { initialValue } = this.props;
    return (
      <StyledEditableInput onSubmit={this.handleSubmit}>
        {editing ? (
          <Input
            value={value}
            onChange={this.handleOnChange}
            onBlur={this.handleCancel}
            autoFocus
          />
        ) : (
          <Value onClick={this.startEditing}>{initialValue}</Value>
        )}
        {editing ? (
          <YesNoButtonGroup cancelAction={this.handleCancel} />
        ) : (
          <StyledIconEdit onClick={this.startEditing} />
        )}
      </StyledEditableInput>
    );
  }
}

EditableInput.propTypes = {
  initialValue: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default EditableInput;
