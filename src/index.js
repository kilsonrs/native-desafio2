/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '~/styles';

export default class App extends Component {
  state = {
    user: 'Kilson',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.user}</Text>
      </View>
    );
  }
}
