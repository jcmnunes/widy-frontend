import React, { Component } from 'react';
import styled from 'styled-components';
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
  background: ${props => props.theme.neutral100};
`;

const StyledForm = styled.form`
  width: 480px;
  background: white;
  border-radius: 12px;
  border: 2px solid ${props => props.theme.neutral400};
  padding: 48px;
  margin-top: 48px;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  width: 100%;
  color: ${props => props.theme.neutral800};
  margin-bottom: 24px;
`;

const Helper = styled.p`
  font-size: 18px;
  color: ${props => props.theme.neutral500};
  width: 90%;
  margin: 0 auto 24px;
  text-align: center;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 48px;
`;

class Forgot extends Component {
  state = {
    email: '',
    emailError: '',
  };

  componentWillUnmount() {
    this.props.setAuthMessage('');
  }

  handleOnChange = e => {
    // Reset sync validation
    const { emailError } = this.state;
    const errors = { emailError: '' };
    if (emailError.length > 0) {
      this.setState({ ...errors });
    }

    // Update state
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnBlur = () => {
    this.validate();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.validate(() => {
      if (this.isFormValid()) {
        const { email } = this.state;
        this.props.forgotThunk({ email });
      }
    });
  };

  validate = cb => {
    const { email } = this.state;
    const errors = { emailError: '' };
    if (email.length === 0) {
      errors.emailError = 'You need to provide your email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.emailError = 'Invalid email address';
    }
    return this.setState({ ...errors }, cb);
  };

  isFormValid = () => {
    const { email, emailError } = this.state;
    return emailError.length === 0 && email.length > 0;
  };

  render() {
    const { fetching, message } = this.props;
    const { emailError } = this.state;
    return (
      <Container>
        <Logo />
        <StyledForm onSubmit={this.handleSubmit}>
          <Title>Forgot password?</Title>
          <Helper>
            Enter your email address below. We’ll email instructions on how to reset your password.
          </Helper>
          {message.length > 0 && (
            <Message intent="success" style={{ marginBottom: 24 }}>
              {message}
            </Message>
          )}
          <InputField
            placeholder="Email address"
            value={this.state.email}
            name="email"
            type="text"
            error={emailError}
            onChange={this.handleOnChange}
            onBlur={this.handleOnBlur}
          />
          <Button type="submit" intent="primary" size="large" loading={fetching} block>
            Reset password
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

export default Forgot;
