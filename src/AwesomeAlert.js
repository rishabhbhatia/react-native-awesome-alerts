import React, {Component} from 'react';

import Alert from './containers';

export default class AwesomeAlert extends Component {

  _renderAlert = () => {
    return (
      <Alert
        {...this.props}
        toggleAlert={this._toggleAlert}
      />
    );
  };

  render() {
    return this._renderAlert();
  };
};
