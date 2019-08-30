import React from 'react';
import styled from 'styled-components/macro';
import { LoadingElement } from '../../../UI';
import theme from '../../../../styles/theme';

const StyledLoadingBoard = styled.div`
  background: white;
  padding: 48px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-left: 16px;
  }
`;

const Section = styled.div`
  margin: 32px 0;

  & > * {
    margin-bottom: 18px;
  }
`;

const LoadingBoard = () => {
  return (
    <StyledLoadingBoard>
      <Header>
        <div>
          <LoadingElement width="170px" height="30px" />
        </div>
        <FlexRow>
          <LoadingElement width="30px" height="30px" circular />
          <LoadingElement width="30px" height="30px" circular />
        </FlexRow>
      </Header>
      <Section>
        <LoadingElement width="100px" height="30px" background={theme.neutral200} />
        <LoadingElement width="100%" height="30px" />
        <LoadingElement width="100%" height="30px" />
        <LoadingElement width="100%" height="30px" />
        <LoadingElement width="100%" height="30px" />
      </Section>
      <Section>
        <LoadingElement width="100px" height="30px" background={theme.neutral200} />
        <LoadingElement width="100%" height="30px" />
        <LoadingElement width="100%" height="30px" />
      </Section>
    </StyledLoadingBoard>
  );
};

export default LoadingBoard;
