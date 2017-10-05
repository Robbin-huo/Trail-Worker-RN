import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    const { navigate } = this.props.navigation;
    this.state = {
      username: null,
      email: null,
      password: null,
      navigate: navigate,
    }
  }

  static navigationOptions = {
    title: "Sign Up"
  };

  handleSignUp() {

  }

  render() {
    return (
      <View style={styles.content}>
        <TextInput
          onChangeText={(text) => this.setState({username: text})}
          placeholder="Username"
          value={this.state.username}
          style={styles.input}/>
        <TextInput
          onChangeText={(text) => this.setState({email: text})}
          placeholder="Email"
          value={this.state.email}
          style={styles.input}/>
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          placeholder="Password"
          value={this.state.password}
          style={styles.input}/>
        <TouchableHighlight
          onPress={() => {this.handleSignUp()}}>
          <Text style={styles.button}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
