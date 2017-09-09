import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';

export default class Progress extends Component {

  _renderProgress = () => {
    return (
      <ActivityIndicator />
    );
  };

  render() {
    const {showProgress} = this.props;

    if(showProgress)
      return this._renderProgress();
    else
      return null;
  };
};
