import React, {Component} from 'react';

import Alert from './containers/alert';

export default class AwesomeAlert extends Component {

  _renderAlert = () => {
    return (
      <Alert {...this.props} />
    );
  };

  render() {
    return this._renderAlert();
  };
};
