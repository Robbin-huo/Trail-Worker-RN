import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
  TextInput,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Icon } from 'react-native-elements';

export default class NewRequest extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <View style={styles.content}>
        <Text style={styles.titleText}>New Trail Request</Text>
        <TextInput
          style={styles.input}
          placeholder="Trail Name"
        />
        <Icon
          name="compass"
          type="material-community"/>
        <TextInput
          style={styles.input}
          placeholder="Location Description"
        />
        <TextInput
          style={styles.input}
          placeholder="Trail Feature Description"
        />
        <Icon
          name="camera"
          type="material-community"
         />
        <TouchableOpacity>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
