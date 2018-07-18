/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Root, TabNavs} from './src/config/router';
import {Provider} from 'react-redux';
import store from './src/config/store';

export default class App extends Component {
  componentDidMount(){
    //Disable the yeallow warning.
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}