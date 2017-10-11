import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
  Keyboard,
  FlatList,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class User extends Component {
  constructor(props){
    super(props);
    Keyboard.dismiss();
    const { params } = this.props.navigation.state;
    this.state = {
      user: params,
      trail_requests: [],
    }
    this.getUserRequests();
  }

  static navigationOptions = {
    header: null
  };

  getUserRequests(){
    const user = this.state.user;
    fetch(`http://10.0.2.2:9393/users/${user.id}/requests`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    }).then((response) => {
      const requests = JSON.parse(response["_bodyText"]);
      if (requests !== null) {
        this.setState({trail_requests: requests})
      } else {
        console.error("Invalid URL");
      }
    });
  }

  renderItem({item}){
    if (item){
      return (<Text
                style={user_styles.trail_row}>
                {item.trail_name}
              </Text>)
    }
    return (<Text></Text>);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.content}>
        <Text style={styles.titleText}>Welcome: {this.state.user.username}</Text>
        <TouchableHighlight
          onPress={() => { navigate('NewRequest', this.state.user); }}>
          <Text style={styles.button}>New Request</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => { navigate('AllRequests', this.state.user); }}>
          <Text style={styles.button}>All Requests</Text>
        </TouchableHighlight>
        <Text style={styles.titleText}>Your Requests</Text>
        <FlatList
          data={this.state.trail_requests}
          keyExtractor={(item) => item.id || 0}
          renderItem={(request) => this.renderItem(request)}
        />
      </View>
    );
  }
}

const user_styles = {
  trail_row: {
    fontSize: 30
  }
}
