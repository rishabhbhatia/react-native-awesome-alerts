import { StyleSheet } from 'react-native';

import config from '../../config';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: config.spacing.actionButtonPaddingHorizontal,
    paddingVertical: config.spacing.actionButtonPaddingVertical,
    margin: config.spacing.actionButtonMargin,
    borderRadius: config.size.actionButtonBorderRadius,
  },
  text: {
    color: '#fff',
    fontSize: config.size.actionButtonFontSize,
    fontFamily:config.fonts.fontRegular
  }
});

export default styles;
