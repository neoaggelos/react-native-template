import React from 'react';
import { createAppContainer } from 'react-navigation';
import RootNavigator from './src/navigators/RootNavigator';

import AuthStore from './src/stores/AuthStore';
import { Provider } from 'react-redux';

const App = createAppContainer(RootNavigator);

export default () => (
  <Provider store={AuthStore}>
    <App />
  </Provider>
)
