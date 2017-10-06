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
  constructor(props){
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      user: params,
      trail_name: null,
      location_desc: null,
      feature_desc: null,
      lat: null,
      long: null,
      pic: null
    }
  }

  static navigationOptions = { header: null };

  handleNewRequest() {
    const user_id = this.state.user.id;
    const { navigate } = this.props.navigation;
    const body = JSON.stringify({
      trail_name: this.state.trail_name,
      location_desc: this.state.location_desc,
      feature_desc: this.state.feature_desc
    });
    fetch(`http://10.0.2.2:9393/users/${user_id}/requests`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    }).then((response) => {
      const resp = JSON.parse(response["_bodyText"]);
      if (resp !== null){
        this.state.navigate('User', user);
      } else {
        alert('Invalid Information');
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    return(
      <View style={request_style.container}>
        <Text style={styles.titleText}>New Trail Request</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => { this.setState({trail_name: text}) }}
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
            onChangeText={(text) => { this.setState({location_desc: text}) }}
            placeholder="Location Description"
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.lg_input}
            onChangeText={(text) => { this.setState({feature_desc: text}) }}
            placeholder="Trail Feature Description"
          />
        </View>
        <Icon
          name="camera"
          color="green"
          type="material-community"
          size={40}
         />
        <TouchableOpacity
          style={request_style.button_container}
          onPress={() => {this.handleNewRequest()}}>
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
