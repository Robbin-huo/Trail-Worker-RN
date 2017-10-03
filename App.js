import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './login.js';
import User from './user.js';
import SignUp from './sign_up.js'

export const App = StackNavigator({
  Login: {screen: Login},
  SignUp: {screen: SignUp},
  User: {screen: User},
})

AppRegistry.registerComponent('trailworker', () => App);
