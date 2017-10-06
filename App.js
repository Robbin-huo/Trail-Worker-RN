import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './lib/login.js';
import User from './lib/user.js';
import SignUp from './lib/sign_up.js'
import NewRequest from './lib/new_request.js';
import AllRequests from './lib/all_requests.js';

export const App = StackNavigator({
  Login: {screen: Login},
  AllRequests: {screen: AllRequests},
  User: {screen: User},
  NewRequest: {screen: NewRequest},
  SignUp: {screen: SignUp},
})

AppRegistry.registerComponent('trailworker', () => App);
