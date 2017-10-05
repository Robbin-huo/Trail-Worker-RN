import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
  TextInput,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class NewRequest extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <View style={styles.content}>
        <Text style={styles.titleText}>New Trail Request</Text>
        <TextInput/>
      </View>
    );
  }
}
