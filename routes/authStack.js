import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LogIn from '../screens/login';
import SignUp from '../screens/signup';

const screens = {
    Home: {
        screen: LogIn
    },
    SignUp: {
        screen: SignUp
    }
}

const AuthStack = createStackNavigator(screens);

export default AuthStack;

