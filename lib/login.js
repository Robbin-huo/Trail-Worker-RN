import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
  Button,
  TextInput,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      error: null,
    }
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  static navigationOptions = {
    title: "Login"
  };

  handleSignIn(email, pass) {
    const { navigate } = this.props.navigation;
    fetch('http://10.0.2.2:9393/sessions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: pass
      })
    }).then((response) => {
      let body = response["_bodyText"];
      body = JSON.parse(body);
      if (body["user"].id !== null) {
        navigate('User', body);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.content}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry= {true}
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableHighlight
          onPress={() => {this.handleSignIn(this.state.email, this.state.password)}}>
          <Text style={styles.button}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.state.navigate('SignUp') }}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
