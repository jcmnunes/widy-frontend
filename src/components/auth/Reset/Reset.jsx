import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Logo from '../Logo';
import { InputField, Button, Link, Message } from '../../UI';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.neutral050};
`;

const StyledForm = styled.form`
  width: 480px;
  background: white;
  border-radius: 12px;
  border: 2px solid ${props => props.theme.neutral300};
  padding: 48px;
  margin-top: 48px;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  width: 100%;
  color: ${props => props.theme.neutral700};
  margin-bottom: 24px;
`;

const Helper = styled.p`
  font-size: 18px;
  color: ${props => props.theme.neutral400};
  width: 90%;
  text-align: center;
  margin: 0 auto 24px;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 48px;
`;

class Reset extends Component {
  state = {
    password: '',
    confirm: '',
    passwordError: '',
    confirmError: '',
  };

  componentWillUnmount() {
    this.props.resetResetError();
  }

  handleOnChange = e => {
    // Reset errors from BE
    const { error } = this.props;
    if (error.length > 0) {
      this.props.resetResetError();
    }

    // Reset sync validation
    const { passwordError, confirmError } = this.state;
    const errors = { passwordError: '', confirmError: '' };
    if (passwordError.length > 0 || confirmError > 0) {
      this.setState({ ...errors });
    }

    // Update state
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.validate(() => {
      if (this.isFormValid()) {
        const { password, confirm } = this.state;
        const { token } = this.props.match.params;
        this.props.reset({ password, confirm, token });
      }
    });
  };

  validate = cb => {
    const { password, confirm } = this.state;
    const errors = { passwordError: '', confirmError: '' };
    if (password.length === 0) {
      errors.passwordError = 'You need to provide a new password';
    }
    if (password.length < 5) {
      errors.passwordError = 'Your password must be at least 5 characters long';
    }
    if (confirm.length === 0) {
      errors.confirmError = 'Please confirm your new password';
    }
    if (password !== confirm) {
      errors.confirmError = 'Passwords do not match';
    }
    return this.setState({ ...errors }, cb);
  };

  isFormValid = () => {
    const { password, passwordError, confirm, confirmError } = this.state;
    return (
      passwordError.length === 0 &&
      confirmError.length === 0 &&
      password.length > 0 &&
      confirm.length > 0
    );
  };

  render() {
    const { loading, error } = this.props;
    const { passwordError, confirmError } = this.state;
    return (
      <Container>
        <Logo />
        <StyledForm onSubmit={this.handleSubmit}>
          <Title>Reset your password</Title>
          <Helper>Choose a new password for your account.</Helper>
          {error.length > 0 && (
            <Message intent="error" style={{ marginBottom: 24 }}>
              {error}
            </Message>
          )}
          <InputField
            placeholder="New password"
            value={this.state.password}
            name="password"
            type="password"
            error={passwordError}
            onChange={this.handleOnChange}
          />
          <InputField
            placeholder="Confirm new password"
            value={this.state.confirm}
            name="confirm"
            type="password"
            error={confirmError}
            onChange={this.handleOnChange}
          />
          <Button type="submit" intent="primary" size="large" loading={loading} block>
            Change password
          </Button>
          <Footer>
            <Link to="/login" size="large">
              Back to Login
            </Link>
          </Footer>
        </StyledForm>
      </Container>
    );
  }
}

Reset.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  resetResetError: PropTypes.func.isRequired,
  match: PropTypes.shape({
    match: PropTypes.object,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      token: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  reset: PropTypes.func.isRequired,
};

export default withRouter(Reset);
