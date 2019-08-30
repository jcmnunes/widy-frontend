import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Input } from '..';
import YesNoButtonGroup from '../YesNoButtonGroup';

const StyledEditableInput = styled.form`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const Value = styled.div`
  cursor: text;
  padding: 12px 16px;
  width: 100%;
  text-align: left;
  font-size: 18px;
  height: 48px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.neutral100};
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  height: auto;
  line-height: 24px;
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

  handleKeyDown = e => {
    const { editing } = this.state;
    if (editing) {
      if (e.key === 'Escape') {
        this.handleCancel();
      }
    }
  };

  render() {
    const { editing, value } = this.state;
    const { initialValue, action, ...other } = this.props;
    return (
      <StyledEditableInput
        onSubmit={this.handleSubmit}
        onKeyDown={this.handleKeyDown}
        onBlur={this.handleSubmit}
        {...other}
      >
        {editing ? (
          <>
            <StyledInput value={value} onChange={this.handleOnChange} autoFocus />
            <YesNoButtonGroup cancelAction={this.handleCancel} />
          </>
        ) : (
          <>
            <Value onClick={this.startEditing}>{initialValue}</Value>
          </>
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
