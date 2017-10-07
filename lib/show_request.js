import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

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
    const details = this.state.request_details;
    const username = this.state.request.user.username;
    return(
      <View style={styles.content}>
        <Text style={styles.titleText}>{details ? details.trail_name : ""}</Text>
        <Text style={styles.subtitleText}>{this.state.request.user.username}</Text>
        <View>
          <Text style={styles.row}>Feature Description: {details ? details.feature_description + "\n" : "\n"}</Text>
        </View>
        <View>
          <Text style={styles.row}>Location Description: {details ? details.location_description + "\n" : "\n"}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="arrow-up"
            color="green"
            reverse={true}
            raised={true}
            size={30}
            type="evilicon"/>
          <Text style={styles.row}>Current Vote Count</Text>
          <Icon
            name="arrow-down"
            color="green"
            reverse={true}
            raised={true}
            size={30}
            type="evilicon"/>
        </View>
        <View>
          <Text>Picture Goes Here</Text>
        </View>
      </View>
    );
  }
}

const show_styles = StyleSheet.create({
  button: {
    fontSize: 20,
    backgroundColor: 'green',
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    padding: 3,
  }
});
