import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Listings from '../screens/listings';
import SingleListing from '../screens/singlelisting';
import AddListing from '../screens/addListing';

const screens = {
    Home: {
        screen: Listings,
        navigationOptions: {
            title: 'View Listings'
        }
    },
    Listing: {
        screen: SingleListing,
        navigationOptions: {
            title: 'Edit Listing'
        }
    },
    AddListing: {
        screen: AddListing,
        navigationOptions: {
            title: 'Add Listing'
        }
    }
}

const AppStack = createStackNavigator(screens);

export default AppStack;