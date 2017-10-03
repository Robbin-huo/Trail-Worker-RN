/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Login from './login.js';

export default class trailworker extends Component {
  render() {
    return (
      <Login/>
    );
  }
}

AppRegistry.registerComponent('trailworker', () => trailworker);
