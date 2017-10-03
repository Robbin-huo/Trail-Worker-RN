/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Login from './login.js';
import User from './user.js';

export default class trailworker extends Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: null
    }
  }
  render() {
    if (!this.state.user_id){
      return (
        <Login set_id={(email, password) =>
        { alert("POST /sessions, {{email: email, password: password}}") }}/>
      );
    } else {
      return(
        <User id={this.state.user_id} />
      );
    }
  }
}

AppRegistry.registerComponent('trailworker', () => trailworker);
