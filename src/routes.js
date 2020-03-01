import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './services/RootNavigation';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator>
        <Screen
          name="home"
          component={Home}
          options={{
            header: ({ navigation }) => <Header navigation={navigation} />,
          }}
        />
        <Screen
          name="cart"
          component={Cart}
          options={{
            header: ({ navigation }) => <Header navigation={navigation} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
