import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import Login from '../Login';
import Logo from '../Logo';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.neutral050};

  .logo {
    display: none;
  }

  @media (max-width: ${props => props.theme.bp_large}) {
    flex-direction: column;

    .logo {
      display: block;
    }
  }
`;

const StyledCard = styled.div`
  width: 1000px;
  height: 640px;
  background: ${props => props.theme.neutral050};
  border: 2px solid ${props => props.theme.neutral300};
  border-radius: 12px;
  display: flex;
  position: relative;

  @media (max-width: ${props => props.theme.bp_large}) {
    max-width: 480px;
    height: auto;
    margin-top: 48px;
  }
`;

const Form = styled.div`
  flex: 1;
  height: 100%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background: white;
  border-left: 2px solid ${props => props.theme.neutral300};
  padding: 64px;

  @media (max-width: ${props => props.theme.bp_large}) {
    border-left: none;
    border-radius: 12px;
  }
`;

class Card extends Component {
  render() {
    return (
      <Container>
        <div className="logo">
          <Logo />
        </div>
        <StyledCard>
          <Hero />
          <Form>
            <Login />
          </Form>
        </StyledCard>
      </Container>
    );
  }
}

export default Card;
