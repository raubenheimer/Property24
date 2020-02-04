import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import FlatButton from '../shared/flatButton';


//The About Screen Layout
export default function SignUp({ navigation }) {
    return (
        <View style={globalStyles.authContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.pimage} source={require('../assets/p24.png')} />
            </View>
            <FlatButton name='Sign Up' />
        </View>
    )
}

const styles = StyleSheet.create({
    signUp: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: "center"
    },
    pimage: {
        marginTop: 25,
        width: 300,
        height: 60,
        resizeMode: 'contain',
    },
    imageContainer: {
        alignItems: "center",
    }
});
