import React, { Component } from 'react';
// import api from '~/services/api';
import { View, Text } from 'react-native';

// import styles from './styles';

class Repositorios extends Component {
  state = {
    repositoryItem: [],
  };

  loadRepositorios = () => {};

  render() {
    return (
      <View>
        <View style={styles.repoItem}>
          <Text style={styles.title}>rocketnative</Text>
          <Text style={styles.organization}>RocketSeat</Text>
        </View>
      </View>
    );
  }
}

export default Repositorios;
