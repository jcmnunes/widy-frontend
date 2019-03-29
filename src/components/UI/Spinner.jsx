import styled, { keyframes } from 'styled-components';

const getColors = props => {
  switch (props.intent) {
    case 'primary':
    case 'success':
    case 'warning':
    case 'error':
      return {
        border: '#FFFFFF32',
        accent: '#FFF',
      };
    default:
      return {
        border: `${props.theme.neutral200}`,
        accent: `${props.theme.neutral300}`,
      };
  }
};

const spin = keyframes`
  100% { 
    transform: rotate(360deg); 
  } 
`;

const Spinner = styled.span`
  display: inline-block;
  box-sizing: border-box;
  width: ${props => (props.size === 'large' ? '24px' : '18px')};
  height: ${props => (props.size === 'large' ? '24px' : '18px')};
  border-radius: 100%;
  border: ${props => `3px solid ${getColors(props).border}`};
  border-top-color: ${props => getColors(props).accent};
  animation: ${spin} 500ms infinite linear;
`;

export default Spinner;
