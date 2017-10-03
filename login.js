import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
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
      password: null
    }
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
        <TouchableHighlight onPress={() => { alert("POST /sessions") }}>
          <Text style={styles.button}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { alert("GET /users/new") }}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 200,
  },
  button: {
    backgroundColor: 'red',
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    padding: 3
  }
});
