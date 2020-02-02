import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import routes from '../../constants/routes';
import store from '../../store';

const routeOptions = {initialRouteName: 'SplashScreen'};

const AppNavigator = createStackNavigator(routes, routeOptions);
const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
