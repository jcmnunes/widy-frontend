import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!authenticated) return <Component {...props} />;
      return <Redirect to="/" />;
    }}
  />
);

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
