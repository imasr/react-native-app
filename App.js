/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import LoggedOut from './src/screens/LoggedOut';
import LogIn from './src/screens/Login';

import colors from './src/styles/colors';

export default class App extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar
          backgroundColor={colors.green01}
          barStyle="dark-content"
          transclude={true}
        />
        <LogIn />
        {/* <LoggedOut /> */}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  }
})

