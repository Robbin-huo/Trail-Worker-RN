import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class User extends Component {
  constructor(props){
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      user: params
    }
  }

  static navigationOptions = {
    header: null
  };

  handleNewRequest() {
    fetch('http://10.0.2.2:9393/requests/new', {
      method: "GET"
    }).then((response) => {
      console.log(response);
      alert(response);
    }).catch((error) => {
      console.error(error.message);
    });
  }

  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.titleText}>Welcome: {this.state.user.username}</Text>
        <TouchableHighlight
          onPress={() => { this.handleNewRequest() }}>
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
