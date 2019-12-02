import React from 'react';
import { theme } from '@binarycapsule/ui-capsules';
import { useParams } from 'react-router';
import Heading1 from '../../common/Typography/Heading1';
import { IconWidy, IconWidyText } from '../../../icons/widy';
import { Brand, Links, StyledMenuBar, StyledLink } from './MenuBar.styles';

const MenuBar = () => {
  const { pageId } = useParams();

  return (
    <StyledMenuBar>
      <Brand to="/">
        <IconWidy size={30} yesterdayColor={theme.blue600} />
        <IconWidyText size={60} textColor={theme.blue600} />
      </Brand>
      <Heading1>Settings</Heading1>
      <Links>
        <StyledLink to="/settings/account" isActive={pageId === 'account'}>
          Account
        </StyledLink>
        <StyledLink to="/settings/pomodoro" isActive={pageId === 'pomodoro'}>
          Pomodoro
        </StyledLink>
        <hr />
        <StyledLink to="/">Exit Settings</StyledLink>
      </Links>
    </StyledMenuBar>
  );
};

export default MenuBar;
