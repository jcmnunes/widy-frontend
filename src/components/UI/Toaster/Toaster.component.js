import { Component } from 'react';

class ToasterComponent extends Component {
  static DEFAULT_OPTIONS = {
    position: 'br',
    autoDismiss: 5,
  };

  static getOptions(notification) {
    let options = notification;
    if (typeof notification === 'string') {
      options = { message: notification };
    }
    return { ...ToasterComponent.DEFAULT_OPTIONS, ...options };
  }

  success = notification => {
    const { showSuccessToast } = this.props;
    showSuccessToast(ToasterComponent.getOptions(notification));
  };

  render() {
    return null;
  }
}

export default ToasterComponent;
