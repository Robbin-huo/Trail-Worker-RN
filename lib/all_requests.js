import React, { Component } from 'react';
import { styles } from '../styles/styles';
import {
  Text,
  View
} from 'react-native';

export default class AllRequests extends Component{
  constructor(props){
    super(props);
  }

  static navigationOptions = { header: null }

  render(){
    return(
      <View style={styles.content}>
        <Text style={styles.titleText}>All Requests</Text>
      </View>
    );
  }
}
