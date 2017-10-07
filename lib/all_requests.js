import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
  FlatList,
  Text,
  View
} from 'react-native';

export default class AllRequests extends Component{
  constructor(props){
    super(props);
    this.state = {
      trail_requests: []
    }
    this.getRequests()
  }

  static navigationOptions = { header: null }

  renderItem({item}){
    const { navigate } = this.props.navigation;
    if (item){
      return(
        <Text
          style={styles.row}
          onPress={() => navigate('ShowRequest', item)}>
          {item.trail_name} - {item.username}
        </Text>
      );
    }
    return (<Text></Text>);
  }

  getRequests(){
    fetch('http://10.0.2.2:9393/requests', {
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

  render(){
    return(
      <View style={styles.content}>
        <Text style={styles.titleText}>All Requests</Text>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>Trail Name - Username</Text>
        <FlatList
          data={this.state.trail_requests}
          keyExtractor={(item) => item.id || 0}
          renderItem={(request) => this.renderItem(request)} />
      </View>
    );
  }
}
