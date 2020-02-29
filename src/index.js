import 'react-native-gesture-handler';

import React from 'react';
import './config/ReactotronConfig';

import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
