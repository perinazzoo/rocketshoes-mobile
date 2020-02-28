import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Cart} options={{ headerShown: false }} />
        <Screen name="Cart" component={Home} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}
