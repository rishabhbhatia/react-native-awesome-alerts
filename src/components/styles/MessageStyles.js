import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import config from '../../config';

const styles = StyleSheet.create({
  container: {
    paddingTop: config.spacing.msgPadding,
    paddingLeft: config.spacing.msgPaddingSides,
    paddingRight: config.spacing.msgPaddingSides,
  },
  text: {
    color: config.colors.msg,
    fontSize: config.size.msg
  }
});

export default styles;
