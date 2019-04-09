import styled from 'styled-components';

export const Button = styled.span`
  cursor: pointer;
  height: 28px;
`;

export const Menu = styled('div')`
  & > * {
    display: flex;
    align-items: center;
  }

  & > * + * {
    margin-left: 15px;
  }
`;

export const Toolbar = styled(Menu)`
  display: flex;
  position: relative;
  border-bottom: 2px solid #eee;
  margin-bottom: 12px;
  height: 28px;
`;
