import React from 'react';
import styled from 'styled-components/macro';
import { IconWidy, IconWidyText } from '../../icons/widy';
import theme from '../../styles/theme';

const StyledLogo = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
`;

const Logo = () => (
  <StyledLogo>
    <IconWidy size={60} yesterdayColor={theme.blue600} />
    <IconWidyText size={80} textColor={theme.blue600} />
  </StyledLogo>
);

export default Logo;
