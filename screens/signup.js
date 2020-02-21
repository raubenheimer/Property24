import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import FlatButton from '../shared/flatButton';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { newUser } from '../api/api'

const signupSchema = Yup.object({
    userName: Yup.string()
        .required('Please enter your username'),
    fullName: Yup.string()
        .required('Please enter your fullname'),
    email: Yup.string()
        .required('Please enter your email')
        .email('Please enter a valid email'),
    password: Yup.string()
        .required('Please enter your password'),
    confirmPassword: Yup.string()
        .required('Please enter your password')
        .when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Passwords are not identical"
            )
        })
})


//The About Screen Layout
export default function SignUp({ navigation }) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.authContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.pimage} source={require('../assets/p24.png')} />
                </View>

                <View>
                    <Formik
                        initialValues={{ userName: '', fullName: '', email: '', password: '', confirmPassword: '' }}
                        validationSchema={signupSchema}
                        onSubmit={(values, actions) => {
                            //actions.resetForm();
                            newUser(values.userName, values.password, values.fullName, values.email);
                        }}
                    >
                        {(props) => (
                            < View >
                                <Text>User Name</Text>
                                < TextInput
                                    style={globalStyles.input}
                                    placeholder=''
                                    onChangeText={props.handleChange('userName')}
                                    value={props.values.userName}
                                />
                                <Text style={globalStyles.required}>{props.touched.userName && props.errors.userName}</Text>

                                <Text>Full Name</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Eg: johndoe@email.com'
                                    placeholderTextColor='#ccc'
                                    onChangeText={props.handleChange('fullName')}
                                    value={props.values.fullName}
                                />
                                <Text style={globalStyles.required}>{props.touched.fullName && props.errors.fullName}</Text>

                                <Text>Email</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Eg: johndoe@email.com'
                                    placeholderTextColor='#ccc'
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                />
                                <Text style={globalStyles.required}>{props.touched.email && props.errors.email}</Text>

                                <Text>Password</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    style={globalStyles.input}
                                    placeholder=''
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                />
                                <Text style={globalStyles.required}>{props.touched.password && props.errors.password}</Text>

                                <Text>Confirm Password</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    style={globalStyles.input}
                                    placeholder=''
                                    onChangeText={props.handleChange('confirmPassword')}
                                    value={props.values.confirmPassword}
                                />
                                <Text style={globalStyles.required}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                                <FlatButton name='Sign Up' onPress={props.handleSubmit} color='#406090'/>
                            </View>
                        )}
                    </Formik>
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
