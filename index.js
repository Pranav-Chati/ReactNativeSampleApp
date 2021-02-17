import { registerRootComponent } from 'expo';

import App from './App';
import Start from './Start'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

//use node 15.0.0
// nvm install 15.0.0 -g
// node -v to make sure