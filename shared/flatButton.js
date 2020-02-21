import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function FlatButton({ name, onPress, color }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.flatButton, {backgroundColor:color}]}>
                <Text style={styles.flatButtonText}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    flatButton: {
        borderRadius: 6,
        paddingVertical: 14,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    flatButtonText: {
        color: 'white',
        fontFamily: 'source-regular',
        fontSize: 20,
        textAlign: 'center'
    }
});