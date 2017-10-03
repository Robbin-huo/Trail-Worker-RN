import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './lib/login.js';
import User from './lib/user.js';
import SignUp from './lib/sign_up.js'

export const App = StackNavigator({
  Login: {screen: Login},
  SignUp: {screen: SignUp},
  User: {screen: User},
})

AppRegistry.registerComponent('trailworker', () => App);
