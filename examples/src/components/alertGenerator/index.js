import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const AlertGenerator = props => (
  <View style={styles.container}>
    <Text>{props.title}</Text>
    <TouchableOpacity onPress={() => props.onPress(props.type)}>
      <View style={styles.button}>
        <Text style={styles.text}>Try me!</Text>
      </View>
    </TouchableOpacity>
  </View>
);

AlertGenerator.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default AlertGenerator;
