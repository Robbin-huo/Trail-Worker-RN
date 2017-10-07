import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
  Text,
  View,
} from 'react-native';


export default class ShowRequest extends Component{
  constructor(props){
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      request: params,
      request_details: null
    }
    this.getRequest();
  }

  static navigationOptions = { header: null }

  getRequest(){
    const user_id = this.state.request.user.id;
    const request_id = this.state.request.request.id;
    const url = `http://10.0.2.2:9393/users/${user_id}/requests/${request_id}`
    fetch(`http://10.0.2.2:9393/users/${user_id}/requests/${request_id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      const request = JSON.parse(response["_bodyText"]);
      if (request !== null) {
        this.setState({request_details: request})
      } else {
        console.error("Invalid URL");
      }
    });
  }

  render(){
    return(
      <View style={styles.content}>
        <Text>{JSON.stringify(this.state.request_details)}</Text>
      </View>
    );
  }
}
