import React, { Component } from 'react';

import Alert from './containers/alert';

export default class AwesomeAlert extends Component {
  render() {
    return <Alert {...this.props} />;
  }
}
