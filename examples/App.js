import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  BackHandler,
  BackAndroid
} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
import config from './src/config';

import AlertGenerator from './src/components/alertGenerator';

const HwBackHandler = BackHandler || BackAndroid;
const HW_BACK_EVENT = 'hardwareBackPress';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, type: config.type.basic };
  }

  showAlert = type => {
    this.setState({
      show: true,
      type
    });
  };

  hideAlert = () => {
    this.setState({
      show: false
    });
  };

  componentDidMount() {
    HwBackHandler.addEventListener(HW_BACK_EVENT, this._handleHwBackEvent);
  }

  componentWillUnmount() {
    HwBackHandler.removeEventListener(HW_BACK_EVENT);
  }

  _handleHwBackEvent = () => {
    return true;
  };

  getProps = () => {
    const { type } = this.state;
    let alertProps = {};

    switch (type) {
      case config.type.progress:
        alertProps = {
          showProgress: true,
          title: 'Loading..',
          closeOnHardwareBackPress: false,
          progressSize: 'small',
          progressColor: 'gray'
        };
        break;
      case config.type.basic:
        alertProps = {
          title: 'BasicAwesomeAlert',
          message: 'I have a message for you!',
          showConfirmButton: true,
          confirmText: 'View',
          confirmButtonColor: config.colors.confirm,
          onConfirmPressed: () => {
            this.hideAlert();
          },
          overlayStyle: {
            backgroundColor: 'rgba(152,152,152,0.5)'
          },
          contentContainerStyle: {
            backgroundColor: 'white'
          },
          titleStyle: {
            fontSize: 18
          },
          messageStyle: {
            fontSize: 14
          }
        };
        break;
      case config.type.error:
        alertProps = {
          title: 'ErrorAwesomeAlert',
          message: 'The selected variant is unavailable!',
          showConfirmButton: true,
          confirmText: 'Dismiss',
          closeOnHardwareBackPress: false,
          confirmButtonColor: config.colors.confirmWarning,
          onConfirmPressed: () => {
            this.hideAlert();
          },
          onDismiss: () => {
            console.log('alert was dismissed');
          }
        };
        break;
      case config.type.action:
        alertProps = {
          title: 'ActionsAwesomeAlert',
          message: 'Checkout cart items before offer expires!',
          showCancelButton: true,
          showConfirmButton: true,
          cancelText: 'No, leave offer',
          confirmText: 'Yes, checkout',
          confirmButtonColor: config.colors.confirm,
          cancelButtonStyle: {
            paddingHorizontal: config.spacing.actionButtonPaddingHorizontal,
            paddingVertical: config.spacing.actionButtonPaddingVertical,
            margin: config.spacing.actionButtonMargin,
            borderRadius: config.size.actionButtonBorderRadius
          },
          cancelButtonTextStyle: {
            color: '#fff',
            fontSize: config.size.actionButtonFontSize
          },
          confirmButtonStyle: {
            paddingHorizontal: config.spacing.actionButtonPaddingHorizontal,
            paddingVertical: config.spacing.actionButtonPaddingVertical,
            margin: config.spacing.actionButtonMargin,
            borderRadius: config.size.actionButtonBorderRadius
          },
          confirmButtonTextStyle: {
            color: '#fff',
            fontSize: config.size.actionButtonFontSize
          },
          onCancelPressed: () => {
            this.hideAlert();
          },
          onConfirmPressed: () => {
            this.hideAlert();
          }
        };
        break;
      case config.type.custom:
        alertProps = {
          title: 'CustomAwesomeAlert',
          customView: this.renderCustomAlertView(),
          showConfirmButton: true,
          onConfirmPressed: () => {
            this.hideAlert();
            const { text = '' } = this.state;
            console.log(text);
          }
        };
        break;
    }

    return alertProps;
  };

  renderCustomAlertView = () => (
    <View style={styles.customView}>
      <TextInput
        maxLength={20}
        placeholder={this.state.text || 'Enter your name..'}
        onChangeText={text => this.setState({ text })}
      />
    </View>
  );

  render() {
    const { show } = this.state;
    let props = this.getProps();

    return (
      <View style={styles.container}>
        {AlertGenerator({
          type: config.type.progress,
          title: config.titles.progress,
          onPress: this.showAlert
        })}
        {AlertGenerator({
          type: config.type.basic,
          title: config.titles.basic,
          onPress: this.showAlert
        })}
        {AlertGenerator({
          type: config.type.error,
          title: config.titles.error,
          onPress: this.showAlert
        })}
        {AlertGenerator({
          type: config.type.action,
          title: config.titles.action,
          onPress: this.showAlert
        })}
        {AlertGenerator({
          type: config.type.custom,
          title: config.titles.custom,
          onPress: this.showAlert
        })}
        <AwesomeAlert show={show} {...props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff'
  },
  customView: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
