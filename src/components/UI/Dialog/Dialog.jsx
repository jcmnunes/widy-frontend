import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '..';
import { IconClose } from '../../../icons/Icons';
import theme from '../../../styles/theme';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(250, 250, 250, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7000;
`;

const StyledDialog = styled.div`
  border: 6px solid ${props => props.theme.neutral200};
  width: 400px;
  background: white;
  box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.1);
`;

const Title = styled.h1`
  font-size: 18px;
  color: ${props => props.theme.neutral600};
  padding: 12px 20px;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;

  > span {
    display: inline-block;
    cursor: pointer;
    width: 36px;
    height: 36px;

    &:focus {
      outline: none;
      box-shadow: inset 0 0 0 4px ${props => props.theme.blue100};
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px 24px 24px;

  > * {
    margin: 0 8px;
  }
`;

const Dialog = ({ actions, children, handleClose }) => {
  const handleCloseModalKeydown = e => {
    if (e.key === 'Enter') {
      handleClose();
    }
  };

  return (
    <Container>
      <StyledDialog>
        <Header>
          <span
            role="button"
            tabIndex="0"
            onClick={handleClose}
            onKeyDown={handleCloseModalKeydown}
          >
            <IconClose size={36} primaryColor={theme.neutral500} />
          </span>
        </Header>
        <Title>{children}</Title>
        <Footer>
          {actions.map(({ name, intent, action }) => (
            <Button key={name} type="button" intent={intent} size="large" onClick={action}>
              {name}
            </Button>
          ))}
        </Footer>
      </StyledDialog>
    </Container>
  );
};

Dialog.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      intent: PropTypes.string,
      action: PropTypes.func.isRequired,
    }),
  ).isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Dialog;
