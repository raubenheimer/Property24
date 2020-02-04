import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Listings from '../screens/listings';
import SingleListing from '../screens/login';

const screens = {
    Home: {
        screen: Listings
    },
    Listing: {
        screen: SingleListing
    }
}

const AppStack = createStackNavigator(screens);

export default AppStack;