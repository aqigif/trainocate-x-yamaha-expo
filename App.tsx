import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

export const RootStack = createNativeStackNavigator({
  screens: {
    Login: Login,
    Home: {
      screen: Home,
      options: {
        title: 'Trainocate',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}