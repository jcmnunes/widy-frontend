import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Logo from '../Logo';
import { IconChart, IconSurvey, IconTime } from '../../../icons/Icons';

const Container = styled.div`
  flex: 1;
  height: 100%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  display: grid;
  grid-gap: 16px;
  padding: 64px;
  align-content: center;
  justify-items: start;

  @media (max-width: ${props => props.theme.bp_large}) {
    display: none;
  }

  h1 {
    font-size: 24px;
    color: ${props => props.theme.neutral700};
    margin-bottom: 32px;
  }
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 18px;
  margin-bottom: 16px;
  align-items: center;

  .icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${props => props.theme.neutral100};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    h2 {
      color: ${props => props.theme.neutral500};
      font-size: 18px;
    }

    p {
      color: ${props => props.theme.neutral300};
      font-size: 18px;
    }
  }
`;

const Hero = ({ theme }) => (
  <Container>
    <Logo />
    <h1>What I Did Yesterday?</h1>
    <Item>
      <div className="icon">
        <IconChart size={32} />
      </div>
      <div className="text">
        <h2>Keep track of what you do</h2>
        <p>Widy helps you track your daily work.</p>
      </div>
    </Item>
    <Item>
      <div className="icon">
        <IconTime size={32} secondaryColor={theme.neutral100} />
      </div>
      <div className="text">
        <h2>Stay in the flow</h2>
        <p>Widy helps you manage your time and stay focused.</p>
      </div>
    </Item>
    <Item>
      <div className="icon">
        <IconSurvey size={32} />
      </div>
      <div className="text">
        <h2>Get handy reports easily</h2>
        <p>Widy will generate reports for you automatically.</p>
      </div>
    </Item>
  </Container>
);

Hero.propTypes = {
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
};

export default withTheme(Hero);
