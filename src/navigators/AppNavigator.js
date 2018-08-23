import { createStackNavigator } from 'react-navigation';
import LogIn from '../screens/LogIn';
import TabNavigator from './TabNavigator';
import ItemDetails from '../components/mylist/ItemDetails';

export default AppNavigator = createStackNavigator(
  {
    LogIn: LogIn,
    LoggedIn: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      },
    },
    ItemDetails: {
      screen: ItemDetails,
      navigationOptions: {
      }
    }
  }, {
    initialRouteName: 'LoggedIn'
  }
);