import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import {homeRoutes, homeRouteOptions} from '../../constants/home.routes';
import store from '../../store';

const AppNavigator = createStackNavigator(homeRoutes, homeRouteOptions);
const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
