import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default class ProfileContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (<Icon name='ios-contact' size={26} color={tintColor} />)
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text> ProfileContainer </Text>
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