import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Button from '../components/Button';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ModalPage extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      // title: 'Index',
      // headerRight: (
      //   <Button onPress={() => {navigation.navigate('Map')}} mode='text' color='red'>Logout</Button>
      // )
    }
  }

  state = {
    data: ''
  }

  onScanned = (e) => {
    console.log(e)
    this.setState({
      data: e.data
    })
    this.scanner.reactivate()
  }

  constructor(props) {
    super(props)
    this.navigation = this.props.navigation;
  }

  render() {
    return (
      <QRCodeScanner
        ref={(scanner) => {this.scanner = scanner}}
        onRead={this.onScanned}
        showMarker={true}
        bottomContent={
          <Button style={{marginTop: 40}} onPress={() => {this.navigation.goBack()}}>Modal screen, go back</Button>
        }
        topContent={
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Last scan: '{this.state.data}'</Text>
          </View>
        }
        />
    )
  }
}

export default ModalPage;
