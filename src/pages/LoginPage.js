import React from 'react';
import { connect } from 'react-redux';

import { View, Text } from 'react-native';

import Button from '../components/Button'
import TextInput from '../components/TextInput'

import { login } from '../actions/AuthActions'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, session_key) => dispatch(login(username, session_key))
  }
}

class ConnectedLoginPage extends React.Component {
  static navigationOptions = {
    title: 'Log In'
  }

  constructor(props) {
    super(props)
    this.navigate = this.props.navigation.navigate;
    this.tryLogin = this.tryLogin.bind(this)
  }

  tryLogin() {
    console.log('Trying to login')
    if (this.state.username === 'neo' && this.state.password === 'pass') {
      this.props.login('neo', 'asdadsfas78790')
      this.navigate('Index')
    }
  }

  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginBottom: 20, fontSize: 20, fontFamily: 'Monospace'}}>Login</Text>
        <TextInput
          onChangeText={(t) => {this.setState({username: t})}}
          placeholder='Username'
          value={this.state.username}
          />
        <TextInput
          onChangeText={(t) => {this.setState({password: t})}}
          placeholder='Password'
          secureTextEntry={true}
          value={this.state.password}
          />
        <Button onPress={this.tryLogin}>Log In</Button>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginPage);
