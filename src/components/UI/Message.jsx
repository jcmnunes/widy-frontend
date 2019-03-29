import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Icon from '../../icons/Icon';

const getColors = props => {
  const colors = {
    background: props.theme.neutral100,
    border: props.theme.neutral400,
    text: props.theme.neutral600,
  };

  switch (props.intent) {
    case 'primary':
      colors.background = props.theme.green600;
      colors.border = props.theme.green700;
      colors.text = '#FFF';
      break;
    case 'success':
      colors.background = props.theme.green600;
      colors.border = props.theme.green700;
      colors.text = '#FFF';
      break;
    case 'warning':
      colors.background = props.theme.yellow800;
      colors.border = props.theme.yellow900;
      colors.text = '#FFF';
      break;
    case 'error':
      colors.background = props.theme.red500;
      colors.border = props.theme.red600;
      colors.text = '#FFF';
      break;
    default:
      break;
  }
  return colors;
};

const shake = keyframes`
   0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-5px);
  }
  40%,
  80% {
    transform: translateX(5px);
  }
`;

const StyledMessage = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-gap: 12px;
  justify-items: start;
  align-items: start;
  color: ${props => getColors(props).text};
  background: ${props => getColors(props).background};
  border: 1px solid ${props => getColors(props).border};
  padding: 12px 16px;
  font-size: 16px;
  animation-name: ${shake};
  animation-fill-mode: both;
  animation-duration: ${props =>
    props.intent === 'error' || props.intent === 'warning' ? '500ms' : 0};

  .icon {
    margin-top: 2px;
    width: 16px;
    height: 16px;
  }

  .message {
    text-align: left;
    line-height: 22px;
  }
`;

class Message extends Component {
  render() {
    const { intent, children, ...other } = this.props;
    return (
      <StyledMessage intent={intent} {...other}>
        <span className="icon">
          <Icon icon={intent} />
        </span>
        <span className="message">{children}</span>
      </StyledMessage>
    );
  }
}

Message.defaultProps = {
  intent: null,
};

Message.propTypes = {
  intent: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Message;
