import React from 'react';
import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native';

export default function FlatButton({name, onPress}) {
    return (
        <TouchableOpacity>
            <View style={styles.flatButton}>
                <Text style={styles.flatButtonText}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    flatButton: {
        borderRadius: 6,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#406090',
        justifyContent: 'center'
    },
    flatButtonText: {
        color: 'white',
        fontFamily:'source-regular',
        fontSize: 20,
        textAlign: 'center'
    }
});