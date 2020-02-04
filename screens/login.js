import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Image } from 'react-native';
import FlatButton from '../shared/flatButton';
import TextButton from '../shared/textButton';
import { globalStyles } from '../styles/global';

//The About Screen Layout
export default function LogIn({ navigation }) {
    return (
        <View style={globalStyles.authContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.pimage} source={require('../assets/p24.png')} />
            </View>
            <FlatButton name='Login' />
            <View style={styles.signUp}>
                <Text style={styles.text}>New User?  </Text>
                <TextButton name='Signup' onPress={() => navigation.navigate('SignUp')} />
            </View>
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
