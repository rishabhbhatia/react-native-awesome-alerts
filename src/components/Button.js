import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles/ButtonStyles';

export default class Button extends Component {

  _renderButton = () => {
    const {text, backgroundColor} = this.props;
    const {onPress} = this.props;

    const containerStyle = {backgroundColor};

    return (
      <TouchableOpacity
        onPress={onPress}
          >
        <View style={[styles.container, containerStyle]}>
          <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
    );
  };

  render() {
    const {show} = this.props;

    if(show)
      return this._renderButton();
    else
      return null
  };
};

Button.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string,
  backgroundColor: PropTypes.string
};

Button.defaultProps = {
  show: false
};
