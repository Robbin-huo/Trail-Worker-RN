/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
} from 'react-native';
import Login from './login.js';

export default class trailworker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null
    };
  }

  geoLocate(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        alert("Success");
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      (error) => {
        alert(JSON.stringify(error));
        this.setState({error: error.message});
      }, {enableHighAccuracy: false, timeout: 25000, maximumAge: 30000});
  }

  render() {
    return (
      <Login/>
      // <View style={styles.content}>
      //   <Button
      //     onPress={() => { this.geoLocate() }}
      //     title="Geolocate"
      //     style={styles.button}
      //   />
      //   {this.state.latitude ? <Text>Latitude: {this.state.latitude}</Text> : <Text></Text>}
      //   {this.state.longitude ? <Text>Longitude: {this.state.longitude}</Text> : <Text></Text>}
      //   {this.state.errors ? <Text>Errors: {this.state.error}</Text> : <Text></Text>}
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('trailworker', () => trailworker);
