import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import ListingCard from '../shared/listingCard';
import AddListingButton from '../shared/addListingButton';
import { connect } from 'react-redux';
import { startGetAllProperties } from '../store/actions/properties'


//The About Screen Layout
function Listings({ navigation, startGetAllProperties, properties }) {

    useEffect(() => {
        console.log('Inside Listings Component')
        startGetAllProperties()
    }, [])

    return (
        <View>
            <FlatList
                data={properties}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Listing', item)}>
                        <ListingCard>
                            <View style={styles.imageWindow}>
                                <Image style={styles.listingImage} source={{ uri: item.image }} />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infoAddress}>{item.number} {item.street}</Text>
                                <Text style={styles.infoName}>Bedrooms: {item.beds}</Text>
                                <Text style={styles.infoPrice}>{item.price}</Text>
                            </View>
                        </ListingCard>
                    </TouchableOpacity>
                )
                }
            />
            <AddListingButton screenName='AddListing' />
        </View >

    )
}

const mapStateToProps = (state) => ({
    properties: state.properties.all
})
const mapDispatchToProps = (dispatch) => ({
    startGetAllProperties: () => dispatch(startGetAllProperties())
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings)


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

    }
});
