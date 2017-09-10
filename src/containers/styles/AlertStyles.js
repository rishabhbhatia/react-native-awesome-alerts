import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import config from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  alertContainer: {
    maxWidth: "80%",
    borderRadius: 5,
    backgroundColor: 'white',
    padding: config.spacing.alertContainerPadding
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: config.spacing.alertContentPadding
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: config.spacing.actionButtonMarginTop
  }
});

export default styles;
