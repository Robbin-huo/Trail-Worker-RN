import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './lib/login.js';
import User from './lib/user.js';
import SignUp from './lib/sign_up.js'
import NewRequest from './lib/new_request.js';
import Ra from './lib/react_autocomplete_test.js'

export const App = StackNavigator({
  Login: {screen: Login},
  NewRequest: {screen: NewRequest},
  Test: {screen: Ra},
  User: {screen: User},
  SignUp: {screen: SignUp},
})

AppRegistry.registerComponent('trailworker', () => App);
