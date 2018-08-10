import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default class NotificationsContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (<Icon name='ios-notifications' size={26} color={tintColor} />)
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text> NotificationsContainer </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    padding: 50
  }
});

