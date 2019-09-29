import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Test</Text>
      </View>
    )
  }
}

export default SecondPage;
