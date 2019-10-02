import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import IndexPage from '../pages/IndexPage';
import SecondPage from '../pages/SecondPage';
import LoginPage from '../pages/LoginPage';
import TestLoginPage from '../pages/TestLoginPage';
import ModalPage from '../pages/ModalPage';


const AppNavigator = createSwitchNavigator({
  TestAuth: TestLoginPage,
  Auth: LoginPage,
  App: createStackNavigator({
    Index: {screen: IndexPage},
    Second: {screen: SecondPage}
  }, {
    initialRouteName: 'Index'
  })
}, {
  initialRouteName: 'TestAuth'
});


const RootNavigator = createStackNavigator({
  Root: AppNavigator,
  Modal: ModalPage
}, {
  initialRouteName: 'Root',
  mode: 'modal',
  headerMode: 'none'
})

export default RootNavigator;
