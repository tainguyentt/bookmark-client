import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default class ItemDetails extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { isShowFooter: false };
  }

  toggleShowFooter = () => {
    this.setState({ isShowFooter: true })
  }

  onGoBackHandle = () => {
    this.props.navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'NO-NAME');
    const source = navigation.getParam('source', 'NO-NAME');
    const tags = navigation.getParam('tags', 'NO-NAME');
    const url = navigation.getParam('url', 'NO-NAME');
    const image = navigation.getParam('image', 'NO-NAME');
    const footer = this.state.isShowFooter ? <View style={styles.footer}>
      <TouchableHighlight onPress={this.onGoBackHandle}>
        <Icon name='ios-arrow-back' size={20} color='grey' />
      </TouchableHighlight>
      <Icon name='ios-checkbox' size={20} color='grey' style={styles.backButton}/>
      <Icon name='ios-share-alt' size={20} color='grey' />
      <Icon name='ios-more' size={20} color='grey' />
    </View> : null;

    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.contentContainer} onScroll={this.toggleShowFooter}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}> {title}  </Text>
            <View style={styles.hr}></View>
            <Text style={styles.source}> {source}  </Text>
          </View>
          <View style={styles.body}>
            <Image source={image} />
            <Text>{url}</Text>
          </View>
        </ScrollView>
        {footer}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  contentContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  headerContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    margin: 0
  },
  hr: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginTop: 10,
    marginBottom: 10
  },
  source: {
    fontSize: 10,
    color: 'grey'
  },
  footer: {
    height: 40,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopColor: 'lightgrey',
    borderTopWidth: 0.5
  },
  backButton: {
    padding: 5,
    borderRadius: 10,
  }
})
