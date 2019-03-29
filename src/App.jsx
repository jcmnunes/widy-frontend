import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Notifications from 'react-notification-system-redux';
import GlobalStyle from './styles/Global';
import Routes from './router/routes';
import PageSpinner from './components/UI/PageSpinner';
import { Modal } from './components/UI';
import toastStyles from './styles/toast';

class App extends Component {
  render() {
    const { loading, notifications } = this.props;
    return (
      <div>
        {loading ? <PageSpinner /> : <Routes />}
        <Notifications notifications={notifications} style={toastStyles} />
        <Modal />
        <GlobalStyle />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  loading: state.auth.loading,
  notifications: state.notifications,
});

export default withRouter(connect(mapStateToProps)(App));
