import React from 'react';
import LogoComponent from '../Logo/Logo.component';
import Icon from '../../../icons/Icon';
import {
  Container,
  IconWrapper,
  Item,
  ItemDescription,
  ItemTitle,
  StyledIcon,
  Title,
} from './Hero.styles';

const HeroComponent = () => (
  <Container>
    <LogoComponent />
    <Title>What I Did Yesterday?</Title>
    <Item>
      <IconWrapper>
        <StyledIcon icon={Icon.CHART} size="32px" />
      </IconWrapper>
      <div>
        <ItemTitle>Keep track of what you do</ItemTitle>
        <ItemDescription>Widy helps you track your daily work.</ItemDescription>
      </div>
    </Item>
    <Item>
      <IconWrapper>
        <StyledIcon icon={Icon.TIME} size="32px" />
      </IconWrapper>
      <div>
        <ItemTitle>Stay in the flow</ItemTitle>
        <ItemDescription>Widy helps you manage your time and stay focused.</ItemDescription>
      </div>
    </Item>
    <Item>
      <IconWrapper>
        <StyledIcon icon={Icon.SURVEY} size="32px" />
      </IconWrapper>
      <div>
        <ItemTitle>Get handy reports easily</ItemTitle>
        <ItemDescription>Widy will generate reports for you automatically.</ItemDescription>
      </div>
    </Item>
  </Container>
);

export default HeroComponent;
