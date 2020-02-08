import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import {authRoutes, authRouteOptions} from '../../constants/auth.routes';

const AuthStackNavigator = createStackNavigator(authRoutes, authRouteOptions);
const AuthContainer = createAppContainer(AuthStackNavigator);

export default AuthContainer;
