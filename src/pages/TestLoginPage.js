import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

class TestLoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.navigate = this.props.navigation.navigate;
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='black' />
      </View>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.navigate('Auth')
    }, 100)
  }
}

export default TestLoginPage;
