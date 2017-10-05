import React, { Component } from 'react';
import {
  TextInput,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class NewRequest extends Component {

  static navigationOptions = {
    title: "New Trail Request"
  };

  render() {
    return(
      <View>
        <Text>Trail:</Text>
        <TextInput
          
        />
      </View>
    );
  }
}
