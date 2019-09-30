import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../components/Button'
import TextInput from '../components/TextInput'

class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'Log In'
  }

  constructor(props) {
    super(props)
    this.navigate = this.props.navigation.navigate;
  }

  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          onChangeText={(t) => {this.setState({username: t})}}
          placeholder='Username'
          value={this.state.username} />
        <TextInput
          onChangeText={(t) => {this.setState({password: t})}}
          placeholder='Password'
          value={this.state.password}
          secureTextEntry={true}/>
        <Button onPress={() => {this.navigate('Index')}}>Log In</Button>
      </View>
    )
  }
}

export default LoginPage;
