import React, {Component} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles/OverlayStyles';

export default class Overlay extends Component {

  render() {
    const {onPress} = this.props;

    return (
      <TouchableWithoutFeedback onPress={onPress} >
        <View style={styles.container} />
      </TouchableWithoutFeedback>
    );
  };
};

Overlay.propTypes = {
  onPress: PropTypes.func
};
