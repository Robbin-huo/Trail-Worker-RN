import React, { Component } from 'react';
import { Text } from 'react-native';

export default class User extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Text>User no. {this.props.id}</Text>
    );
  }
}
