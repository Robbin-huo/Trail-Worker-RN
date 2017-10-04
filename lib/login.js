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
    const { navigate } = this.props.navigation;
    this.state = {
      email: null,
      password: null,
      error: null,
      navigate: navigate
    }
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  static navigationOptions = {
    title: "Login"
  };

  handleSignIn(email, pass) {
    fetch('http://192.168.165.26:9393/sessions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: pass
      })
    }).then((response) => response.json())
    .then((responseJson) => {
      alert(resopnseJson);
      // if responseJson.user.id != nil {
      //   this.state.navigate('user', responseJson);
      // }
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
