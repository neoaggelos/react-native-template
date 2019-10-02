import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MapView , { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

class SecondPage extends React.Component {
  static navigationOptions = {
    title: 'Second Page',
  }

  constructor(props) {
    super(props)

    this.navigate = this.props.navigation.navigate;
  }

  componentDidMount() {
    if (true) {
      console.log('TRIED')
      Geolocation.watchPosition((pos) => {
        console.log('POSITION')
        console.log(pos)
        this.setState({location: pos.coords})
      }, (err) => {
        console.log('ERROR')
        console.log(err)
      }, {
        enableHighAccuracy: true,
        showLocationDialog: true,
        distanceFilter: 0,
        maximumAge: 10000,
        timeout: 15000
      })
    }
  }

  componentWillUnmount() {
    Geolocation.clearWatch()
  }

  state = {
    location: {latitude: 37, longitude: 22.5}
  }

  render() {
    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
          style={{width: '100%', height: '100%'}}>
          <Marker
            draggable
            title='You are here'
            description='But why?'
            coordinate={this.state.location}
            onPress={() => this.navigate('Modal')} />
        </MapView>
      </View>
    )
  }
}

export default SecondPage;
