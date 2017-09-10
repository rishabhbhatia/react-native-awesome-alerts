import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
import config from './src/config';

import {
  ProgressAwesomeAlert,
  BasicAwesomeAlert,
  ErrorAwesomeAlert,
  ActionsAwesomeAlert
} from './src/components';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { show: false, type: config.type.basic };
  };

  showAlert = (type) => {
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

  getProps = () => {
    const {type} = this.state;
    let alertProps = {};

    switch(type) {
      case config.type.progress:
        alertProps = {
          showProgress:true,
          title:"Loading..",
          closeOnHardwareBackPress:false
        }
      break;
      case config.type.basic:
        alertProps = {
          title: "BasicAwesomeAlert",
          message: "I have a message for you!",
          showConfirmButton: true,
          confirmText: "View",
          confirmButtonColor: config.colors.confirm,
          onConfirmPressed: () => {
            this.hideAlert();
          }
        }
      break;
      case config.type.error:
        alertProps = {
          title: "ErrorAwesomeAlert",
          message: "The selected variant is unavailable!",
          showConfirmButton: true,
          confirmText: "Dismiss",
          confirmButtonColor: config.colors.confirmWarning,
          onConfirmPressed: () => {
            this.hideAlert();
          }
        }
      break;
      case config.type.action:
        alertProps = {
          title: "ActionsAwesomeAlert",
          message: "Checkout cart items before offer expires!",
          showCancelButton: true,
          showConfirmButton: true,
          cancelText: "No, leave offer",
          confirmText: "Yes, checkout",
          confirmButtonColor: config.colors.confirm,
          onCancelPressed: () => {
            this.hideAlert();
          },
          onConfirmPressed: () => {
            this.hideAlert();
          }
        }
      break;
    };

    return alertProps;
  }

  render() {
    const {show} = this.state;
    let props = this.getProps();

    return (
      <View style={styles.container}>

        <ProgressAwesomeAlert onPress={this.showAlert} />
        <BasicAwesomeAlert onPress={this.showAlert} />
        <ErrorAwesomeAlert onPress={this.showAlert} />
        <ActionsAwesomeAlert onPress={this.showAlert} />

        <AwesomeAlert
          show={show}
          {...props}
        />
      </View>
    );
  };

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});
