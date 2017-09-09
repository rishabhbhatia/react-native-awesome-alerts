import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import config from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    padding: config.spacing.alertContainerPadding,
  },
  alertContainer: {
    width: "70%",
    borderRadius: 5,
    backgroundColor: 'white',
  },
  content: {
    padding: config.spacing.alertContentPadding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
});

export default styles;
