import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
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
      pic: null,
      compass_color: "green"
    }
  }

  static navigationOptions = { header: null };

  handleNewRequest() {
    const user = this.state.user;
    const { navigate } = this.props.navigation;
    const body = JSON.stringify({
      trail_name: this.state.trail_name,
      location_description: this.state.location_desc,
      feature_description: this.state.feature_desc,
      latitude: this.state.lat,
      longitude: this.state.long
    });
    fetch(`http://10.0.2.2:9393/users/${user.id}/requests`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    }).then((response) => {
      const resp = JSON.parse(response["_bodyText"]);
      if (resp === true){
        navigate('User', user);
      } else {
        alert('Must complete required fields');
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  geoLocate(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
        compass_color: "blue"
      });
    }, (error) => {
      this.setState({compass_color: "red"})
    }, {enableHighAccuracy: true, timeout: 25000, maximumAge: 30000});
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
            color={this.state.compass_color}
            style={request_style.icon}
            onPress={() => this.geoLocate()}
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
