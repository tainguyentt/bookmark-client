import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default class RecommendedContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Recommended',
    tabBarIcon: ({ tintColor }) => (<Icon name='ios-pulse' size={26} color={tintColor} />)
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text> RecommendedContainer </Text>
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