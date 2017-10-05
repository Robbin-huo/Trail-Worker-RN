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
    const body = JSON.stringify({email: this.state.email,
                  username: this.state.username,
                  password: this.state.password});
    fetch('http://10.0.2.2:9393/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    }).then((response) => {
      const user = JSON.parse(response['_bodyText']);
      if (user !== null){
        this.state.navigate('User', user);
      } else {
        alert('Invalid Information');
      }
    });
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
          keyboardType="email-address"
          value={this.state.email}
          style={styles.input}/>
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          placeholder="Password"
          secureTextEntry= {true}
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
