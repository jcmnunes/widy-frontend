import React from 'react';
import styled from 'styled-components/macro';
import { Icon24, theme } from '@binarycapsule/ui-capsules';

const StyledSideBar = styled.div`
  background: ${props => props.theme.yellow050};
  flex: 1;
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: ${props => props.theme.bp_xlarge}) {
    display: flex;
  }
`;

const SideBar = () => {
  return (
    <StyledSideBar>
      <Icon24
        icon="CHART"
        size="128px"
        primaryColor={theme.yellow100}
        secondaryColor={theme.yellow050}
      />
    </StyledSideBar>
  );
};

export default SideBar;
