import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import {homeRoutes, homeRouteOptions} from '../../constants/home.routes';

const HomeStackNavigator = createStackNavigator(homeRoutes, homeRouteOptions);
const HomeContainer = createAppContainer(HomeStackNavigator);

export default HomeContainer;
