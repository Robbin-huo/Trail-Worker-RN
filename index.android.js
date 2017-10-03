/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './login.js';
import User from './user.js';

export default class trailworker extends Component {
}

const App = StackNavigator({
  Login: {screen: Login},
  User: {screen: User},
})

AppRegistry.registerComponent('trailworker', () => App);
