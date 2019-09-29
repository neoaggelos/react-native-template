import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../components/Button';

class IndexPage extends React.Component {
  static navigationOptions = {
    title: 'Index'
  }

  constructor(props) {
    super(props)
    this.navigate = this.props.navigation.navigate;
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => {this.navigate('Second')}}>
            Second screen
        </Button>
      </View>
    )
  }
}

export default IndexPage;
