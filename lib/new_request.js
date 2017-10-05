import React, { Component } from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';
import { styles } from '../styles/styles.js'
import { Icon } from 'react-native-elements';

export default class NewRequest extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <View style={request_style.container}>
        <Text style={styles.titleText}>New Trail Request</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Trail Name"
          />
          <Icon
            name="compass"
            size={40}
            color="green"
            style={request_style.icon}
            type="material-community"/>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input, styles.lg_input}
            placeholder="Location Description"
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.lg_input}
            placeholder="Trail Feature Description"
          />
        </View>
        <Icon
          name="camera"
          color="green"
          type="material-community"
          size={40}
         />
        <TouchableOpacity style={request_style.button_container}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const request_style = StyleSheet.create({
  container: {
    margin: 10
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  icon: {
    marginLeft: 5
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
