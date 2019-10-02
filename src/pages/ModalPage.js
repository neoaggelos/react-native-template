import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../components/Button';

class ModalPage extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      // title: 'Index',
      // headerRight: (
      //   <Button onPress={() => {navigation.navigate('Map')}} mode='text' color='red'>Logout</Button>
      // )
    }
  }

  constructor(props) {
    super(props)
    this.navigation = this.props.navigation;
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => {this.navigation.goBack()}}>Modal screen, go back</Button>
      </View>
    )
  }
}

export default ModalPage;
