import styled from 'styled-components';

const Input = styled.input`
  height: 48px;
  background: ${props => props.theme.neutral200};
  color: ${props => props.theme.neutral700};
  border-radius: 4px;
  border: none;
  font-size: 18px;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  padding: 12px 16px;

  &::placeholder {
    color: ${props => props.theme.neutral400};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${props => props.theme.blue200};
  }
`;

export default Input;
