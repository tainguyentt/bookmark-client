import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default class MyListContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'My List',
    tabBarIcon: ({ tintColor }) => (<Icon name='ios-bookmarks' size={26} color={tintColor} />)
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text> MyListContainer </Text>
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

