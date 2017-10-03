import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        username: "Hambone",
        id: 43,
        password: "wenis"
      }
    }
  }

  static navigationOptions = {
    title: "User Page",
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.content}>
        <Text style={styles.titleText}>Welcome: {this.state.user.username}</Text>
        <TouchableHighlight>
          <Text style={styles.button}>New Request</Text>
        </TouchableHighlight>
        <Text style={styles.titleText}>Your Requests</Text>
        <ScrollView>
          <Text style={{fontSize: 20}}>- New water bar on Crane Lake</Text>
          <Text style={{fontSize: 20}}>- Better ditch-and-drain near Killington summit</Text>
          <Text style={{fontSize: 20}}>- Hide social paths on Blue Ridge</Text>
          <Text style={{fontSize: 20}}>- New water bar on Crane Lake</Text>
          <Text style={{fontSize: 20}}>- Better ditch-and-drain near Killington summit</Text>
          <Text style={{fontSize: 20}}>- Hide social paths on Blue Ridge</Text>
          <Text style={{fontSize: 20}}>- New water bar on Crane Lake</Text>
          <Text style={{fontSize: 20}}>- Better ditch-and-drain near Killington summit</Text>
          <Text style={{fontSize: 20}}>- Hide social paths on Blue Ridge</Text>
          <Text style={{fontSize: 20}}>- New water bar on Crane Lake</Text>
          <Text style={{fontSize: 20}}>- Better ditch-and-drain near Killington summit</Text>
          <Text style={{fontSize: 20}}>- Hide social paths on Blue Ridge</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  content: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  button: {
    backgroundColor: 'red',
    marginTop: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 3
  }
});
