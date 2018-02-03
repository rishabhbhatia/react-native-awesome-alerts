import { StyleSheet, Dimensions } from 'react-native';

import config from '../../config';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  overlay: {
    width: width,
    height: height,
    position: 'absolute',
    backgroundColor: 'rgba(52,52,52,0.5)',
  },
  contentContainer: {
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
  },
  title: {
    paddingVertical: config.spacing.titlePadding,
    paddingHorizontal: config.spacing.titlePaddingSides,
    color: config.colors.title,
    fontSize: config.size.title
  },
  message: {
    paddingTop: config.spacing.msgPadding,
    color: config.colors.msg,
    fontSize: config.size.msg
  },
  button: {
    paddingHorizontal: config.spacing.actionButtonPaddingHorizontal,
    paddingVertical: config.spacing.actionButtonPaddingVertical,
    margin: config.spacing.actionButtonMargin,
    borderRadius: config.size.actionButtonBorderRadius,
  },
  buttonText: {
    color: '#fff',
    fontSize: config.size.actionButtonFontSize
  }
});

export default styles;
