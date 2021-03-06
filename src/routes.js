import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/Auth/SignIn';
// import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Dashboard2 from './pages/Dashboard2';
// import Profile from './pages/Profile';

// import SelectProvider from './pages/New/SelectProvider';
// import SelectDateTime from './pages/New/SelectDateTime';
// import Confirm from './pages/New/Confirm';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          // SignUp,
        }),

        App: createBottomTabNavigator(
          {
            Dashboard,
            Dashboard2,

            // Profile,
          },
          {
            // defaultNavigationOptions: ({ navigation }) => ({
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#8d41a8',
              },
            },
            // }),
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
