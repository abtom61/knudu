import React, {Component} from 'react';
import {Alert, Button, TextInput, Platform, StyleSheet, Text, View} from 'react-native';

export default class Profil extends Component{
  render() {
    return (
      <View style={styles.container}>
          <Button
            title={'Profil-Seite'}
            titleStyle={styles.buttonTitle}
            style={styles.button}
            onPress={this.onLogin.bind(this)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bdc3c7',
  },
});