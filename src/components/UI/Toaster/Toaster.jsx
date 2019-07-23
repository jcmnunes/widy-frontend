import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';
import toastStyles from '../../../styles/toast';

export class Toaster extends Component {
  static defaultOptions = {
    position: 'br',
    autoDismiss: 5,
  };

  static success(notification) {
    Toaster._instance._success(notification);
  }

  static error(notification) {
    Toaster._instance._error(notification);
  }

  static warning(notification) {
    Toaster._instance._warning(notification);
  }

  static info(notification) {
    Toaster._instance._info(notification);
  }

  /**
   * Constructs the notification object
   *
   * @param {Object|string} notification
   * @returns {Object} - Notification object
   */
  static getOptions(notification) {
    let options = notification;
    if (typeof notification === 'string') {
      options = { message: notification };
    }
    return { ...Toaster.defaultOptions, ...options };
  }

  constructor(props) {
    super(props);
    if (!Toaster._instance) {
      Toaster._instance = this;
    }
  }

  _success = notification => {
    const { dispatch } = this.props;
    dispatch(Notifications.success(Toaster.getOptions(notification)));
  };

  _error = notification => {
    const { dispatch } = this.props;
    dispatch(Notifications.error(Toaster.getOptions(notification)));
  };

  _warning = notification => {
    const { dispatch } = this.props;
    dispatch(Notifications.warning(Toaster.getOptions(notification)));
  };

  _info = notification => {
    const { dispatch } = this.props;
    dispatch(Notifications.info(Toaster.getOptions(notification)));
  };

  render() {
    const { notifications } = this.props;
    return <Notifications notifications={notifications} style={toastStyles} />;
  }
}

Toaster.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  notifications: state.notifications,
});

export default connect(mapStateToProps)(Toaster);
