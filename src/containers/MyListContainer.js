import Icon from '@expo/vector-icons/Ionicons';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from '../../node_modules/react-native-gesture-handler';
import MyListItem from '../components/mylist/MyListItem';
import myList from '../data/myList';

export default class MyListContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'My List',
    headerRight: 'ABC',
    tabBarLabel: 'My List',
    tabBarIcon: ({ tintColor }) => (<Icon name='ios-bookmarks' size={26} color={tintColor} />),
  });

  onPressHandle = (params) => {
    this.props.navigation.navigate('ItemDetails', params);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Icon name='ios-options' size={20} color='grey' />
          </View>
          <Text style={styles.headerTitle}>My List</Text>
          <View style={styles.headerRight}>
            <Icon name='ios-search' size={20} color='grey' />
          </View>
        </View>
        <FlatList
          style={styles.content}
          data={myList}
          renderItem={({ item }) =>
            <MyListItem
              onPressHandle={() => this.onPressHandle(item)}
              title={item.title}
              source={item.source}
              url={item.url}
              image={item.image}
              tags={item.tags} />
          } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'lightgrey',
  },
  headerContainer: {
    backgroundColor: 'white',
    height: 60,
    padding: 10,
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
  },
  headerTitle: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '600',
  },
  headerRight: {
  },
  content: {
    paddingTop: 20,
  },
});