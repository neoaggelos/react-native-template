import { createAppContainer } from 'react-navigation';

import RootNavigator from './src/navigators/RootNavigator';

const App = createAppContainer(RootNavigator);

export default App;
