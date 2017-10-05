import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
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
      navigate: navigate,
    }
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  static navigationOptions = {
    title: "Login"
  };

  handleSignIn(email, pass) {
    const navigate =  this.state.navigate;
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
      let user = response["_bodyText"];
      user = JSON.parse(user);
      if (user !== null) {
        navigate('User', user);
      } else {
        alert("Invalid Credentials");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const navigate = this.state.navigate;
    return (
      <View style={styles.content}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry= {true}
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
        />
        <TouchableHighlight
          onPress={() => {this.handleSignIn(this.state.email, this.state.password)}}>
          <Text style={styles.button}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { navigate('SignUp') }}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
