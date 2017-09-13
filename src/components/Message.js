import React, {Component} from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles/MessageStyles';

export default class Message extends Component {

  _renderMessage = (message) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
      </View>
    );
  }

  render() {
    const {message} = this.props;
    const show = typeof message === 'string';

    if(show)
      return this._renderMessage(message);
    else
      return null;
  };
};

Message.propTypes = {
  message: PropTypes.string
};
