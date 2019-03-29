import React, { Component } from 'react';
import styled from 'styled-components';
import { Checkbox } from '../../../UI';

const StyledTask = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 1px solid ${props => props.theme.neutral300};
  border-radius: 4px;
  background: white;
  padding: 8px;
  font-size: 16px;
  margin: 4px 0;
  color: ${props => props.theme.neutral800};

  &:last-of-type {
    margin-bottom: 12px;
  }
`;

class Task extends Component {
  render() {
    return (
      <StyledTask>
        <Checkbox intent="success" />
        <span>{this.props.children}</span>
      </StyledTask>
    );
  }
}

export default Task;
