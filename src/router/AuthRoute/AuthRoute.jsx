import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!authenticated) return <Component {...props} />;
      return <Redirect to="/" />;
    }}
  />
);

AuthRoute.propTypes = {
  // component: PropTypes.element.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
