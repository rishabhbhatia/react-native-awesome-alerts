import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';
import config from '../config';

import styles from './styles';

export default class BasicAwesomeAlert extends Component {

  render() {
    const { onPress } = this.props;

    return (
      <View style={styles.container}>
        <Text>I'm BasicAwesomeAlert</Text>
        <TouchableOpacity onPress={() => onPress(config.type.basic)}>
          <View style={styles.button}>
            <Text style={styles.text}>Try me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
};

BasicAwesomeAlert.propTypes = {
  onPress: PropTypes.func.isRequired
};
