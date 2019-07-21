import Notifications from 'react-notification-system-redux';

const defaultOptions = {
  position: 'br',
  autoDismiss: 5,
};

export default store => ({
  getOptions(notification) {
    let options = notification;
    if (typeof notification === 'string') {
      options = { message: notification };
    }
    return { ...defaultOptions, ...options };
  },
  success(notification) {
    store.dispatch(Notifications.success(this.getOptions(notification)));
  },
  error(notification) {
    store.dispatch(Notifications.error(this.getOptions(notification)));
  },
  warning(notification) {
    store.dispatch(Notifications.warning(this.getOptions(notification)));
  },
  info(notification) {
    store.dispatch(Notifications.info(this.getOptions(notification)));
  },
});
