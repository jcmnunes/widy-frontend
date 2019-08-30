import React from 'react';
import styled from 'styled-components/macro';
import { IconWidyText } from '../../../icons/widy';
import Spinner from '../Spinner';
import theme from '../../../styles/theme';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.neutral050};
  display: grid;
  grid-gap: 18px;
  align-content: center;
  justify-items: center;
`;

const PageSpinner = () => (
  <Container>
    <IconWidyText size={125} textColor={theme.blue600} />
    <Spinner size="large" />
  </Container>
);

export default PageSpinner;
