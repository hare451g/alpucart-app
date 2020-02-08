import SplashScreen from '../screens/SplashScreen';
import LandingScreen from '../screens/LandingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';

const authRoutes = {
  LandingScreen: {
    screen: LandingScreen,
  },

  SplashScreen: {
    screen: SplashScreen,
  },

  RegisterScreen: {
    screen: RegisterScreen,
  },

  LoginScreen: {
    screen: LoginScreen,
  },

  OTPScreen: {
    screen: OTPScreen,
  },
};

const authRouteOptions = {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      elevation: 0,
    },
    headerTitleStyle: {
      fontFamily: 'Montserrat_semi_bold',
      fontSize: 18,
    },
    headerTitleAlign: 'center',
  },
};

export {authRoutes, authRouteOptions};
