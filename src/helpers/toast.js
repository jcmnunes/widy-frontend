import Notifications from 'react-notification-system-redux';
import store from '../';

const defaultOptions = {
  position: 'br',
  autoDismiss: 5,
};

export default {
  _getOptions(notification) {
    let options = notification;
    if (typeof notification === 'string') {
      options = { message: notification };
    }
    return { ...defaultOptions, ...options };
  },
  success(notification) {
    store.dispatch(Notifications.success(this._getOptions(notification)));
  },
  error(notification) {
    store.dispatch(Notifications.error(this._getOptions(notification)));
  },
  warning(notification) {
    store.dispatch(Notifications.warning(this._getOptions(notification)));
  },
  info(notification) {
    store.dispatch(Notifications.info(this._getOptions(notification)));
  },
};
