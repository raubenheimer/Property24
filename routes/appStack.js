import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Listings from '../screens/listings';
import SingleListing from '../screens/singlelisting';
import AddListing from '../screens/addListing';
import AllListings from '../screens/allListings';
import ViewListing from '../screens/viewListing'

const screens = {
    Home: {
        screen: Listings,
        navigationOptions: {
            title: 'My Listings'
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
    },
    All: {
        screen: AllListings,
        navigationOptions: {
            title: 'View All Listings',
            headerLeft: () => null
        }
    },
    ViewListing: {
        screen: ViewListing,
        navigationOptions: {
            title: 'View This Listing'
        }
    },
}

const AppStack = createStackNavigator(screens);

export default AppStack;