import React, { Component } from 'react'
import {
  Plaform,
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Text,
} from 'react-native'

import SearchInput from './src/components/SearchInput'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: 'Nigeria',
    }
  }
  handleUpdateLocation = (city) => {
    this.setState({
      location: city,
    })
  }
  render() {
    return (
      // <SearchInput
      //   placeholder="search any city"
      //   onSubmit={this.handleUpdateLocation}
      // />
      <KeyboardAvoidingView behaviour="padding" style={styles.container}>
        <Text style={[styles.largeText, styles.textStyles]}>Nigeria</Text>
        <Text style={[styles.smallText, styles.textStyles]}>light cloud</Text>
        <Text style={[styles.largeText, styles.textStyles]}>
          24 <Text>&#176;</Text>
        </Text>

        <SearchInput placeholder="Search any city" />
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
})
