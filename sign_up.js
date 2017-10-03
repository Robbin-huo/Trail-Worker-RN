import React, { Component } from 'react';
import { styles } from './styles/styles';
import {
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
