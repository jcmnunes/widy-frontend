import styled from 'styled-components/macro';

export const StyledForm = styled.form`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 32px;
  max-width: 256px;
  width: 100%;

  input {
    margin-top: 6px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 32px;

  > * {
    margin-left: 12px;
  }
`;
