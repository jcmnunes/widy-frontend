import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components/macro';
import theme from '../../../styles/theme';

const loading = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const StyledLoadingElement = styled.div`
  position: relative;
  background-color: ${props => props.background};
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => (props.circular ? '999px' : 'initial')};
  overflow: hidden;

  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${loading} 1s infinite;
  }
`;

const LoadingElement = props => <StyledLoadingElement {...props} />;

LoadingElement.defaultProps = {
  circular: false,
  background: theme.neutral100,
};

LoadingElement.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  circular: PropTypes.bool,
  background: PropTypes.string,
};

export default LoadingElement;
