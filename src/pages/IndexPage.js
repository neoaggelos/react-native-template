import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../components/Button';

class IndexPage extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Index',
      headerRight: (
        <Button onPress={() => {navigation.navigate('Auth')}} mode='text' color='red'>Logout</Button>
      )
    }
  }

  constructor(props) {
    super(props)
    this.navigate = this.props.navigation.navigate;
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => {this.navigate('Second')}}>Second screen</Button>
      </View>
    )
  }
}

export default IndexPage;
