import { createStackNavigator } from 'react-navigation';
import LogIn from '../screens/LogIn';
import TabNavigator from './TabNavigator';

export default AppNavigator = createStackNavigator(
  {
    LogIn: LogIn,
    LoggedIn: TabNavigator,
  }, {
    initialRouteName: 'LogIn'
  }
);