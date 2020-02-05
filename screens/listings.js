import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import ListingCard from '../shared/listingCard';
import { TextInput } from 'react-native-gesture-handler';

//The About Screen Layout
export default function Listings({ navigation }) {

    const wol = 0;

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
                data={houses}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Listing', item)}>
                        <ListingCard>
                            <View style={styles.imageWindow}>
                                <Image style={styles.listingImage} source={item.img} />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.infoAddress}>{item.address}</Text>
                                <Text style={styles.infoName}>{item.name}</Text>
                                <Text style={styles.infoPrice}>{item.price}</Text>
                            </View>
                        </ListingCard>
                    </TouchableOpacity>
                )
                }
            />
        </View >
      
    )
}

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
