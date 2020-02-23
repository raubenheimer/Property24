import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function NavBar({ button1, button2, onPress1, onPress2 }) {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity onPress={onPress1}>
                <View style={styles.navButton}>
                    <Text style={styles.navButtonText}>
                        {button1}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress2}>
                <View style={styles.navButton}>
                    <Text style={styles.navButtonText}>
                        {button2}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>



    )
};

const styles = StyleSheet.create({
    navBar: {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: '#343a40',
        justifyContent: 'space-evenly',
        alignItems: "center"
    },
    navButton: {
       
    },
    navButtonText: {
        fontFamily: 'source-bold',
        fontSize: 15,
        textAlign: 'center',
        color:'white'
    }
});