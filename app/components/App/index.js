import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../../Screens/HomeScreen';
import SplashScreen from '../../Screens/SplashScreen';

import store from '../../store';

const routes = {
  HomeScreen: {
    screen: HomeScreen,
  },
  SplashScreen: {
    screen: SplashScreen,
  },
};
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
