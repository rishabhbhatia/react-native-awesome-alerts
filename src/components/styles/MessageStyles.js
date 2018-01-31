import { StyleSheet } from 'react-native';

import config from '../../config';

const styles = StyleSheet.create({
  container: {
    paddingTop: config.spacing.msgPadding
  },
  text: {
    color: config.colors.msg,
    fontSize: config.size.msg,
    fontFamily:config.fonts.fontRegular
  }
});

export default styles;
