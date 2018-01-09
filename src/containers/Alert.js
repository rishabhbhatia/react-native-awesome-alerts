import React, {Component} from 'react';
import {
  Animated,
  View,
  BackAndroid,
  BackHandler
} from 'react-native';

import {
  Progress,
  Title,
  Message,
  Button,
  Overlay
} from '../components';

import PropTypes from 'prop-types';
import config from '../config';

import styles from './styles/AlertStyles';

const HwBackHandler = BackHandler || BackAndroid;
const HW_BACK_EVENT = 'hardwareBackPress';

export default class Alert extends Component {

  constructor (props) {
    super(props);
    const {show} = this.props;
    this.springValue = new Animated.Value(0.3);

    this.state = {
      showSelf: false
    };

    if(show)
      this._springShow(true);
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
    if(fromConstructor)
      this.state = {showSelf: true};
    else
      this.setState({
        showSelf: !this.state.showSelf
      });
  };

  _handleHwBackEvent = () => {
    if(this.state.showSelf) {
      this._springHide();
      return true;
    }

    return false;
  };

  _renderAlert = () => {
    const animation = {
      transform: [{scale: this.springValue}]
    };

    const {showProgress} = this.props;
    const {title, message} = this.props;
    const {showCancelButton, cancelText, cancelButtonColor, onCancelPressed} = this.props;
    const {showConfirmButton, confirmText, confirmButtonColor, onConfirmPressed} = this.props;

    return (
      <View style={styles.container}>
        <Overlay onPress={() => {
          const {closeOnTouchOutside} = this.props;
          if(closeOnTouchOutside)
            this._springHide();
        }} />
        <Animated.View style={[styles.alertContainer, animation]}>
          <View style={styles.content}>
            <Progress showProgress={showProgress} />
            <Title title={title} />
            <Message message={message} />
          </View>
          <View style={styles.action}>
            <Button
              text={cancelText}
              show={showCancelButton}
              backgroundColor={cancelButtonColor}
              onPress={onCancelPressed}
            />
            <Button
              text={confirmText}
              show={showConfirmButton}
              backgroundColor={confirmButtonColor}
              onPress={onConfirmPressed}
            />
          </View>
        </Animated.View>
      </View>
    );
  }

  render() {
    const {showSelf} = this.state;

    if(showSelf)
      return this._renderAlert();
    else
      return null;
  };

  componentWillReceiveProps(nextProps) {
    const {show} = nextProps;

    if(show)
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
