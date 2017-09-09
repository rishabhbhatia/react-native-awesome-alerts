import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles/TitleStyles';

export default class Title extends Component {

  _renderTitle = (title) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  };

  render() {
    const {title} = this.props;
    const show = typeof title === 'string';

    if(show)
      return this._renderTitle(title);
    else
      return null;
  };
};
