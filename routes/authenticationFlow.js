import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppStack from './appStack';
import AuthStack from './authStack';


export default createAppContainer(
  createSwitchNavigator(
    {
      //AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      //initialRouteName: 'AuthLoading',
      initialRouteName: 'Auth',
    }
  )
);