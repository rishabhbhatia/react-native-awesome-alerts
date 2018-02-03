import React, { Component } from 'react';
import {
  Text,
  Animated,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  BackAndroid,
  BackHandler
} from 'react-native';

import PropTypes from 'prop-types';
import config from '../../config';

import styles from './style';

const HwBackHandler = BackHandler || BackAndroid;
const HW_BACK_EVENT = 'hardwareBackPress';

export default class Alert extends Component {

  constructor(props) {
    super(props);
    const { show } = this.props;
    this.springValue = new Animated.Value(0.3);

    this.state = {
      showSelf: false
    };

    if (show) this._springShow(true);
  };

  componentDidMount() {
    HwBackHandler.addEventListener(HW_BACK_EVENT, this._handleHwBackEvent);
  };

  _springShow = (fromConstructor) => {
    this._toggleAlert(fromConstructor);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        bounciness: 10
      }
    ).start();
  };

  _springHide = () => {
    if (this.state.showSelf === true) {
      Animated.spring(
        this.springValue,
        {
          toValue: 0,
          tension: 10
        }
      ).start();

      setTimeout(() => {
        this._toggleAlert();
      }, 70);
    }
  };

  _toggleAlert = (fromConstructor) => {
    if (fromConstructor) this.state = { showSelf: true };
    else this.setState({ showSelf: !this.state.showSelf });
  };

  _handleHwBackEvent = () => {
    if (this.state.showSelf) {
      this._springHide();
      return true;
    }

    return false;
  };

  _onTapOutside = () => {
    const { closeOnTouchOutside } = this.props;
    if (closeOnTouchOutside) this._springHide();
  };

  _renderButton = (data) => {
    const { text, backgroundColor, onPress } = data;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, { backgroundColor }]}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  _renderAlert = () => {
    const animation = { transform: [{ scale: this.springValue }] };

    const { showProgress } = this.props;
    const { title, message } = this.props;
    const { showCancelButton, cancelText, cancelButtonColor, onCancelPressed } = this.props;
    const { showConfirmButton, confirmText, confirmButtonColor, onConfirmPressed } = this.props;

    const { alertContainerStyle, overlayStyle, progressSize, progressColor,
      contentContainerStyle, titleStyle, messageStyle } = this.props;

    const cancelButtonData = {
      text: cancelText,
      backgroundColor: cancelButtonColor,
      onPress: onCancelPressed
    };

    const confirmButtonData = {
      text: confirmText,
      backgroundColor: confirmButtonColor,
      onPress: onConfirmPressed
    };

    return (
      <View style={[styles.container, alertContainerStyle]}>
        <TouchableWithoutFeedback onPress={this._onTapOutside} >
          <View style={[styles.overlay, overlayStyle]} />
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.contentContainer, animation, contentContainerStyle]}>
          <View style={styles.content}>
            {showProgress && <ActivityIndicator size={progressSize} color={progressColor} />}
            {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
            {message && <Text style={[styles.message, messageStyle]}>{message}</Text>}
          </View>
          <View style={styles.action}>
            {showCancelButton && this._renderButton(cancelButtonData)}
            {showConfirmButton && this._renderButton(confirmButtonData)}
          </View>
        </Animated.View>
      </View>
    );
  }

  render() {
    const { showSelf } = this.state;

    if (showSelf)
      return this._renderAlert();

    return null;
  };

  componentWillReceiveProps(nextProps) {
    const { show } = nextProps;

    if (show)
      this._springShow();
    else
      this._springHide();
  };

  componentWillUnmount() {
    HwBackHandler.removeEventListener(HW_BACK_EVENT);
  }

};

Alert.propTypes = {
  show: PropTypes.bool,
  showProgress: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  closeOnTouchOutside: PropTypes.bool,
  closeOnHardwareBackPress: PropTypes.bool,
  showCancelButton: PropTypes.bool,
  showConfirmButton: PropTypes.bool,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  cancelButtonColor: PropTypes.string,
  confirmButtonColor: PropTypes.string,
  onCancelPressed: PropTypes.func,
  onConfirmPressed: PropTypes.func,
};

Alert.defaultProps = {
  show: false,
  showProgress: false,
  closeOnTouchOutside: true,
  closeOnHardwareBackPress: true,
  showCancelButton: false,
  showConfirmButton: false,
  cancelText: config.alert.cancelText,
  confirmText: config.alert.confirmText,
  cancelButtonColor: config.colors.cancel,
  confirmButtonColor: config.colors.confirm,
};
