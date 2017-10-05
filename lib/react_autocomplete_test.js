import React, { Component } from 'react';
import AutoComplete from 'react-native-autocomplete-input';
import {
  TextInput,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

export default class Ra extends Component {

  constructor (props) {
    super(props)
    this.state = {
      query: "",
      parks: ["Rainier", "Olympic", "Adirondack National Park", "Robinson", "Oliveri"]
    }
  }

  _filterData(query) {
    if (query === '') {
      return [];
    }

    const { parks } = this.state;
    const regex = new RegExp(`^${query.trim()}`, 'i');
    return parks.filter(park => park.search(regex) >= 0);
  }


  render() {
    const {query} = this.state;
    const data = this._filterData(query);
    return(
      <View>
        <View style={styles.autocompleteContainer}>
          <AutoComplete data={data}
            defaultValue={query}
            onChangeText={text => this.setState({ query: text })}
            renderItem={data => (
              <TouchableOpacity onPress={() => this.setState({ query: data })}>
                <Text>{data}</Text>
              </TouchableOpacity>
            )}/>
          </View>
          <View>
            <Text>Some content</Text>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  }
});
