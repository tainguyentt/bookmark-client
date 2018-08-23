import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

export default class MyListItem extends Component {
  get Tags() {
    const { tags } = this.props;
    if (!tags) return;
    return tags.map((tag) => {
      return <View key={tag.key} style={styles.tagContainer}><Text style={styles.tag}> {tag.key} </Text></View>;
    });
  }

  render() {
    const { title, source, image, url, onPressHandle } = this.props;
    return (
      <TouchableHighlight onPress={onPressHandle}>
        <View style={styles.wrapper}>
          <View style={styles.contentContainer} >
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.source}> {source} </Text>
            <View style={styles.tagList}>
              {this.Tags}
            </View>
          </View>
          <Image source={image} style={styles.image} />
        </View>
      </TouchableHighlight>
    );
  }
}

MyListItem.propTypes = {
  onPressHandle: PropTypes.func
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  source: {
    color: 'grey'
  },
  tagList: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  tagContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 2,
    backgroundColor: 'grey',
    padding: 1
  },
  tag: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500'
  },
  image: {
    width: 100,
    height: 100
  }
});
