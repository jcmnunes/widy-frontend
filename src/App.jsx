import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Notifications from 'react-notification-system-redux';
import GlobalStyle from './styles/Global';
import Routes from './router/routes';
import PageSpinner from './components/UI/PageSpinner';
import { Modal } from './components/UI';
import toastStyles from './styles/toast';
import { version } from '../package.json';

class App extends Component {
  /**
   * Removes the static loading indicator (see public/index.html)
   */
  componentDidMount() {
    const item = document.getElementById('initial-loading');
    if (item) {
      item.parentNode.removeChild(item);
    }
  }

  render() {
    const { loading, notifications } = this.props;
    return (
      <div data-version={version}>
        {loading ? <PageSpinner /> : <Routes />}
        <Notifications notifications={notifications} style={toastStyles} />
        <Modal />
        <GlobalStyle />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const mapStateToProps = state => ({
  loading: state.auth.init.loading,
  notifications: state.notifications,
});

export default withRouter(connect(mapStateToProps)(App));
