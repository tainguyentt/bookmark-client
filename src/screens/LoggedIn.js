import React, { Component } from 'react';
import TabNavigator from '../navigators/TabNavigator';

export default class LoggedIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: null,
    headerStyle: transparentHeaderStyle,
  });

  render() {
    return (
      <TabNavigator />
    );
  }
}
