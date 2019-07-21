import Notifications from 'react-notification-system-redux';

export const showSuccessToast = options => dispatch => {
  dispatch(Notifications.success(options));
};
