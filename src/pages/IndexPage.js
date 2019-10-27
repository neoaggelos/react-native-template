import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native';

import Button from '../components/Button';

import { logout } from '../actions/AuthActions';

function mapStateToProps(state) {
  console.log('State in mapState', state)
  return {
    username: state.username
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  }
}

class ConnectedIndexPage extends React.Component {
  static navigationOptions = {
    title: 'Index'
  }

  doLogout() {
    this.props.logout();
    this.navigate('Auth');
  }

  constructor(props) {
    super(props)
    console.log(props.username, props)
    this.navigate = this.props.navigation.navigate;
    this.doLogout = this.doLogout.bind(this);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome back {this.props.username}</Text>
        <Button color='red' onPress={this.doLogout}>Logout</Button>
        <Button onPress={() => {this.navigate('Second')}}>Second screen</Button>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedIndexPage);
