import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import ListingCard from '../shared/listingCard';
import AddListingButton from '../shared/addListingButton';
import { connect } from 'react-redux';
import { startGetAllProperties } from '../store/actions/properties';
import NavBar from '../shared/navBar'

//The About Screen Layout
function AllListings({ navigation, startGetAllProperties, properties, state }) {

    useEffect(() => {
        startGetAllProperties()
    }, [])


    return (
        <View >
            <View style={styles.navBar}>
                <NavBar
                    button1= 'Edit My Listings'
                    button2= 'All Listings'
                    color= 'blue'
                    onPress1={() => navigation.navigate('Home')}
                    onPress2={() => navigation.navigate('All')}
                    />
            </View>
            <View>
            <FlatList
                data={properties}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Listing', item)}>
                        <ListingCard>
                            <View style={styles.imageWindow}>
                                <Image style={styles.listingImage} source={{ uri: item.images[0] }} />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infoAddress}>{item.number} {item.street}, {item.city}, {item.postCode}</Text>
                                <Text style={styles.infoName}>{item.name}</Text>
                                <Text style={styles.infoPrice}>R {item.price}</Text>
                            </View>
                        </ListingCard>
                    </TouchableOpacity>
                )
                }
                keyExtractor={item => item._id}
            />
            </View>
            <AddListingButton screenName='AddListing' />
        </View >

    )
}

const mapStateToProps = (state) => ({
    properties: state.properties.allProperties,
    state
})


export default connect(mapStateToProps, { startGetAllProperties })(AllListings)


const styles = StyleSheet.create({
    imageWindow: {
        alignItems: 'center',
        overflow: 'hidden'
    },
    info: {
        marginLeft: 8,
    },
    infoAddress: {
        fontFamily: 'source-bold',
        fontSize: 17,
        marginBottom: 5
    },
    infoName: {
        fontFamily: 'source-regular',
        fontSize: 15,
        marginBottom: 5
    },
    infoPrice: {
        fontFamily: 'source-regular',
        fontSize: 15,
        marginBottom: 10
    },
    listingImage: {
        width: 345,
        height: 200,
        resizeMode: 'stretch',
        borderRadius: 6

    },
    navBar: {
        height: 35,
        justifyContent: "center"
    }
});
