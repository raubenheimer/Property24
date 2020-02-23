import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';

export default function AddListingButton({ screenName }) {

    const navigation = useNavigation();

    return (
        <MaterialIcons
            name='add'
            size={50}
            style={styles.fab}
            onPress={() => navigation.navigate(screenName)}
        />
    )
}


const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 40,
        bottom: 85,
        backgroundColor: '#406090',
        elevation: 8,
        color: 'white'
        
    },
})