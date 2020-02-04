import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TextButton({ name, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.textButton}>{name }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textButton: {
        color: 'blue'
    }
});

