import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Login from './appJs/Login';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});