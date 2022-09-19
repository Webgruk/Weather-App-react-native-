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

import getImageForWeather from './utils/getImageForWeather'
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
      <KeyboardAvoidingView behaviour="padding" style={styles.container}>
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyles={styles.image}
        >
          <View style={styles.detailContaier}>
            <Text style={[styles.largeText, styles.textStyles]}>
              {this.state.location}
            </Text>
            <Text style={[styles.smallText, styles.textStyles]}>
              light cloud
            </Text>
            <Text style={[styles.largeText, styles.textStyles]}>
              24 <Text>&#176;</Text>
            </Text>
            <SearchInput
              placeholder="Search any city"
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyles: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
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
  detailContaier: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
})
