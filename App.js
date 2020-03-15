import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './store';
import Home from './Home'

export default () => (
  <Provider store={store}>
    <Home></Home>
  </Provider>
);

