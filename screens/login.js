import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image, TextInput, Keyboard } from 'react-native';
import FlatButton from '../shared/flatButton';
import TextButton from '../shared/textButton';
import { globalStyles } from '../styles/global';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { loginUser, getAllProperties } from '../api/api'

const loginSchema = Yup.object({
    username: Yup.string()
        .required('Please enter your username'),
    password: Yup.string()
        .required('Please enter your password')
})

export default function LogIn({ navigation }) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.authContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.pimage} source={require('../assets/p24.png')} />
                </View>
                <View>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validationSchema={loginSchema}
                        onSubmit={(values, actions) => {
                            loginUser(values.username, values.password, navigation);
                            actions.resetForm();
                        }}
                    >
                        {(props) => (
                            < View >
                                <Text>Username</Text>
                                < TextInput
                                    style={globalStyles.input}
                                    placeholder='Eg: johndoe@email.com'
                                    placeholderTextColor='#ccc'
                                    onChangeText={props.handleChange('username')}
                                    value={props.values.username}
                                />
                                <Text style={globalStyles.required}>{props.touched.username && props.errors.username}</Text>

                                <Text>Password</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder=''
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                />
                                <Text style={globalStyles.required}>{props.touched.password && props.errors.password}</Text>
                                <FlatButton name='Login' onPress={props.handleSubmit} />
                            </View>
                        )}
                    </Formik>
                </View>

                <View style={styles.signUp}>
                    <Text style={styles.text}>New User?  </Text>
                    <TextButton name='Signup' onPress={() => navigation.navigate('SignUp')} />
                </View>
                <View style={styles.signUp}>
                    <TextButton name='Sign in as test' onPress={() => loginUser('test', 'test', navigation)} />
                </View>
                <View style={styles.signUp}>
                    <TextButton name='Get all test' onPress={() => getAllProperties()} />
                </View>
            </View>
        </TouchableWithoutFeedback>
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
