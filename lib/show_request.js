import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

export default class ShowRequest extends Component{
  constructor(props){
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      request: params.item,
      currentUser: params.user,
      request_details: null
    }
    this.getRequest();
  }

  static navigationOptions = { header: null }

  getRequest(){
    const user_id = this.state.request.user.id;
    const request_id = this.state.request.request.id;
    const url = `http://10.0.2.2:9393/users/${user_id}/requests/${request_id}`
    fetch(url, {
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

  arrow(direction){
    return(
      <Icon
        name={`arrow-${direction}`}
        color="green"
        reverse={true}
        onPress={() => this.handleVote(direction === 'down' ? -1 : 1)}
        raised={true}
        size={30}
        type="evilicon"/>
    );
  }

  handleVote(value){
    const user_id = this.state.currentUser.id;
    const request_id = this.state.request.request.id;
    const url = `http://10.0.2.2:9393/requests/${request_id}/votes`;
    const body = JSON.stringify({user_id: user_id, request_id: request_id, value: value});
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    }).then((response) => {
      const vote_count = JSON.parse(response["_bodyText"]);
      if (vote_count !== null) {
        const request_details = this.state.request_details
        request_details.votes = vote_count
        this.setState({request_details: request_details});
      } else {
        console.error("Something went wrong.");
      }
    })
  }

  render(){
    const details = this.state.request_details;
    const username = this.state.request.user.username;
    return(
      <View style={styles.content}>
        <Text style={styles.titleText}>{details ? details.trail_name : ""}</Text>
        <Text style={styles.subtitleText}>Suggested by: {this.state.request.user.username}</Text>
        <View>
          <Text style={styles.row}>Feature Description: {details ? details.feature_description + "\n" : "\n"}</Text>
        </View>
        <View>
          <Text style={styles.row}>Location Description: {details ? details.location_description + "\n" : "\n"}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.arrow('up')}
          <Text style={show_styles.vote_row}>{details ? details.votes : " "}</Text>
          {this.arrow('down')}
        </View>
        <View>
          <Text>Picture Goes Here</Text>
        </View>
        <View>
          <Text>Map Goes Here</Text>
        </View>
      </View>
    );
  }
}

const show_styles = StyleSheet.create({
  vote_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 40
  },
});
