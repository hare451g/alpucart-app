import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';

const homeRoutes = {
  HomeScreen: {
    screen: HomeScreen,
  },
  SplashScreen: {
    screen: SplashScreen,
  },
};

const homeRouteOptions = {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      elevation: 0,
    },
    headerTitleStyle: {
      fontFamily: 'Montserrat_semi_bold',
      fontSize: 18,
    },
  },
};

export {homeRoutes, homeRouteOptions};
