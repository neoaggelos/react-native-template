import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import IndexPage from '../pages/IndexPage';
import SecondPage from '../pages/SecondPage';
import LoginPage from '../pages/LoginPage';
import TestLoginPage from '../pages/TestLoginPage';

const AppNavigator = createStackNavigator({
  Index: {screen: IndexPage},
  Second: {screen: SecondPage}
});

const RootNavigator = createSwitchNavigator({
  TestAuth: TestLoginPage,
  Auth: LoginPage,
  App: AppNavigator
}, {
  initialRouteName: 'TestAuth'
});

export default RootNavigator;
