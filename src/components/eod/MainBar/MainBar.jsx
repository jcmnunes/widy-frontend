import React from 'react';
import styled from 'styled-components';

const StyledMainBar = styled.div`
  background: ${props => props.theme.yellow400};
`;

const MainBar = () => <StyledMainBar />;

export default MainBar;
