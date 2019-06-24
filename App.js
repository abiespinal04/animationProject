
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ball from './src/components/Ball';
import Deck from './src/components/Deck'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Deck/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
