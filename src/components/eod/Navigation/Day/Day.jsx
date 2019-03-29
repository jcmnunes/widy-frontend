import React, { Component } from 'react';
import styled from 'styled-components';
import { IconCheveronRight } from '../../../../icons/Icons';
import theme from '../../../../styles/theme';

const StyledDay = styled.div`
  height: 42px;
  border-radius: 4px;
  border: ${props =>
    props.selected ? `1px solid ${props.theme.blue800}` : `1px solid ${props.theme.neutral200}`};
  background: ${props => (props.selected ? props.theme.blue100 : 'white')};
  font-size: 14px;
  color: ${props => props.theme.neutral800};
  padding: 0 8px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    border: 1px solid ${props => props.theme.blue800};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${props => props.theme.blue200};
  }
`;

class Day extends Component {
  hanldeOnKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.onClick();
    }
  };

  render() {
    return (
      <StyledDay
        tabIndex="0"
        selected={this.props.selected}
        onClick={this.props.onClick}
        onKeyPress={this.hanldeOnKeyPress}
      >
        <span>{this.props.children}</span>
        <IconCheveronRight primaryColor={theme.neutral800} />
      </StyledDay>
    );
  }
}

export default Day;
