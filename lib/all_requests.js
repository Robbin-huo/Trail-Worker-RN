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
  }

  static navigationOptions = { header: null }

  renderItem({item}){
    if (item){
      return(
        <Text>{item.trail_name}</Text>
      );
    }
    return (<Text></Text>);
  }

  render(){
    return(
      <View style={styles.content}>
        <Text style={styles.titleText}>All Requests</Text>
        <FlatList
          data={this.state.trail_requests}
          keyExtractor={(item) => item.id || 0}
          renderItem={(request) => this.renderItem(request)} />
      </View>
    );
  }
}
