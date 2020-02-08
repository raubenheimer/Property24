import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Listings from '../screens/listings';
import SingleListing from '../screens/singlelisting';
import AddListing from '../screens/addListing';

const screens = {
    Home: {
        screen: Listings
    },
    Listing: {
        screen: SingleListing
    },
    AddListing: {
        screen: AddListing
    }
}

const AppStack = createStackNavigator(screens);

export default AppStack;