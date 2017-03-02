'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  pic: {
    width:100,
    height:100,
  }
});

export default class extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            React-Native入门学习
        </Text>
        <Image style={styles.pic} source={{uri: 'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}}>
        </Image>
      </View>
    );
  }
}
