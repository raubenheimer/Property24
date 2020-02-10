import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import ListingCard from '../shared/listingCard';
import AddListingButton from '../shared/addListingButton';
import { connect } from 'react-redux';
import { startGetAllProperties } from '../store/actions/properties'


//The About Screen Layout
function Listings({ navigation, startGetAllProperties, properties }) {

    const wol = 0;

    useEffect(() => {
        console.log('Inside Listings Component')
        startGetAllProperties()
        console.log('from listings', properties)
    }, [])

    const [houses, setHouses] = useState([
        { address: '420 Electric Avenue, Lilycove City, 6969', name: '3 Bedroom Villa', price: 'R 4,200,000', img: require('../assets/house.jpg'), key: '1' },
        { address: '69 Nice Street, Littleroot Town, 1111', name: '2 Bedroom Seaside House', price: 'R 6,000,009', img: require('../assets/house2.jpg'), key: '2' },
        { address: '11 Baker Street, Meteor Falls, 2525', name: '1 Bedroom Mansion', price: 'R 25,000,000', img: require('../assets/house.jpg'), key: '3' },
        { address: '11 Kestell Street, Lavaridge Town, 2958', name: '3 Bedroom Cosy Shack', price: 'R 2,000,000', img: require('../assets/house2.jpg'), key: '4' },
    ]);

    const editListing = () => {
        setHouses((currentHouses) => {
            console.log(currentHouses);
        });
    }

    return (
        <View>
            <FlatList
                data={properties}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Listing', item)}>
                        <ListingCard>
                            <View style={styles.imageWindow}>
                                <Image style={styles.listingImage} source={{uri:item.image}} />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infoAddress}>{item.address}</Text>
                                <Text style={styles.infoName}>{item.bedrooms}</Text>
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
import { Form } from 'formik';

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
