import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { InputField, Button, Link, Message } from '../../UI';

const FormContainer = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-gap: 48px;
  align-content: center;
  justify-items: start;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.neutral700};
  margin-bottom: 32px;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
`;

class LoginComponent extends Component {
  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  componentWillUnmount() {
    this.props.resetLoginError();
  }

  handleOnChange = e => {
    // Reset errors from BE
    const { loginError, resetLoginError } = this.props;
    if (loginError.length > 0) {
      resetLoginError();
    }

    // Reset sync validation
    const { emailError, passwordError } = this.state;
    const errors = { emailError: '', passwordError: '' };
    if (emailError.length > 0 || passwordError.length > 0) {
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
    const { loginRequest } = this.props;
    this.validate(() => {
      if (this.isFormValid()) {
        loginRequest({
          email: this.state.email,
          password: this.state.password,
        });
      }
    });
  };

  validate = cb => {
    const { email, password } = this.state;
    const errors = { emailError: '', passwordError: '' };
    if (email.length === 0) {
      errors.emailError = 'You need to provide your email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.emailError = 'Invalid email address';
    }
    if (password.length === 0) {
      errors.passwordError = 'You need to provide your password';
    }
    return this.setState({ ...errors }, cb);
  };

  isFormValid = () => {
    const { email, emailError, password, passwordError } = this.state;
    return (
      emailError.length === 0 &&
      passwordError.length === 0 &&
      email.length > 0 &&
      password.length > 0
    );
  };

  render() {
    const { loading, loginError } = this.props;
    const { emailError, passwordError } = this.state;
    return (
      <FormContainer>
        <StyledForm onSubmit={this.handleSubmit}>
          <Title>Login to your account</Title>
          {loginError.length > 0 && (
            <Message intent="error" style={{ marginBottom: 24 }}>
              {loginError}
            </Message>
          )}
          <InputField
            placeholder="Email address"
            value={this.state.email}
            name="email"
            type="text"
            error={emailError}
            onChange={this.handleOnChange}
          />
          <InputField
            placeholder="Password"
            value={this.state.password}
            name="password"
            type="password"
            error={passwordError}
            onChange={this.handleOnChange}
          />
          <Button type="submit" intent="primary" size="large" isLoading={loading}>
            Login
          </Button>
        </StyledForm>
        <Footer>
          <Link to="/forgot" size="large">
            Forgot password?
          </Link>
        </Footer>
      </FormContainer>
    );
  }
}

LoginComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  loginError: PropTypes.string.isRequired,
  loginRequest: PropTypes.func.isRequired,
  resetLoginError: PropTypes.func.isRequired,
};

export default LoginComponent;
