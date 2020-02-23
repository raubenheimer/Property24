import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ListingCard from '../shared/listingCard';

export default function ViewListing({ navigation }) {

    return (

        <View>
            <ListingCard>
                <View style={styles.imageWindow}>
                    <Image style={styles.listingImage} source={{ uri: navigation.getParam('images')[0] }} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoAddress}> {navigation.getParam('number') + ' ' + navigation.getParam('street') + ', ' + navigation.getParam('city') + ', ' + navigation.getParam('postCode')} </Text>
                    <Text style={styles.infoName}>Discription: {navigation.getParam('name')}</Text>
                    <Text style={styles.infoName}>Price: R {navigation.getParam('price')}</Text>
                    <Text style={styles.infoName}>Bedrooms: {navigation.getParam('beds')}</Text>
                    <Text style={styles.infoPrice}>Bathrooms: {navigation.getParam('baths')}</Text>
         
                </View>
            </ListingCard>
        </View>
    )
};
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
