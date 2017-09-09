import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import config from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: config.spacing.actionButtonPaddingHorizontal,
    paddingVertical: config.spacing.actionButtonPaddingVertical,
    margin: config.spacing.actionButtonMargin,
    borderRadius: config.size.actionButtonBorderRadius,
  },
  text: {
    color: '#fff',
    fontSize: config.size.actionButtonFontSize
  }
});

export default styles;
