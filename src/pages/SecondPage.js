import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MapView , { PROVIDER_GOOGLE } from 'react-native-maps';

class SecondPage extends React.Component {
  static navigationOptions = {
      title: 'Second Page'
  }

  constructor(props) {
    super(props)

    this.navigate = this.props.navigation.navigate;
  }

  render() {
    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 37,
            longitude: 22.5,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
          style={{width: 400, height: 400, borderColor: 'black', borderWidth:20}}>
          </MapView>
      </View>
    )
  }
}

export default SecondPage;
