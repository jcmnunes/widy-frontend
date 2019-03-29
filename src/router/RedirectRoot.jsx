import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class RedirectRoot extends Component {
  componentDidMount() {
    this.props.history.push('/');
  }

  render() {
    return <div>Loading...</div>;
  }
}

export default withRouter(RedirectRoot);
