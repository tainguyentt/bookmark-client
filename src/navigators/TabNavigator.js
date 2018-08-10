import { createBottomTabNavigator } from 'react-navigation';
import MyListContainer from '../containers/MyListContainer';
import RecommendedContainer from '../containers/RecommendedContainer';
import NotificationsContainer from '../containers/NotificationsContainer';
import ProfileContainer from '../containers/ProfileContainer';
import colors from '../styles/colors';

export default MainTabNavigator = createBottomTabNavigator(
  {
    MyListContainer: { screen: MyListContainer },
    RecommendedContainer: { screen: RecommendedContainer },
    NotificationsContainer: { screen: NotificationsContainer },
    MyListContProfileContainerainer: { screen: ProfileContainer }
  }, {
    tabBarOptions: {
      labelStyle: {
        fontWeight: '600',
      },
      activeTintColor: colors.activeRed,
    }
  }
);