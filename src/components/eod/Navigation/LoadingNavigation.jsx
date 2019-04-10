import React from 'react';
import styled from 'styled-components';
import { LoadingElement } from '../../UI';

const StyledLoadingNavigation = styled.div`
  & > * {
    margin-bottom: 8px;
  }
`;

const LoadingNavigation = () => {
  return (
    <StyledLoadingNavigation>
      <LoadingElement width="100%" height="40px" />
      <LoadingElement width="100%" height="40px" />
      <LoadingElement width="100%" height="40px" />
      <LoadingElement width="100%" height="40px" />
    </StyledLoadingNavigation>
  );
};

export default LoadingNavigation;
