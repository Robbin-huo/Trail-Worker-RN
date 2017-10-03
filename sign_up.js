import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SignUp extends Component {
  static navigationOptions = {
    title: "Sign Up"
  };

  render() {
    return (
      <View style={styles.content}>
        <Text>Howdy!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 200,
    fontSize: 20
  },
  button: {
    fontSize: 20,
    backgroundColor: 'green',
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    padding: 3
  }
});
