import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image, TextInput, Keyboard } from 'react-native';
import FlatButton from '../shared/flatButton';
import TextButton from '../shared/textButton';
import { globalStyles } from '../styles/global';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AddListingButton from '../shared/addListingButton'

const loginSchema = Yup.object({
    email: Yup.string()
        .required('Please enter your email')
        .email('Please enter a valid email'),
    password: Yup.string()
        .required('Please enter your password')
})

//The About Screen Layout
export default function LogIn({ navigation }) {

    const [login, setLogin] = useState({ email: '', password: '' });

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.authContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.pimage} source={require('../assets/p24.png')} />
                </View>
                <View>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={loginSchema}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            setLogin(values);
                            //navigation.navigate('App');
                        }}
                    >
                        {(props) => (
                            < View >
                                <Text>Email</Text>
                                < TextInput
                                    style={globalStyles.input}
                                    placeholder='Eg: johndoe@email.com'
                                    placeholderTextColor='#ccc'
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                />
                                <Text style={globalStyles.required}>{props.touched.email && props.errors.email}</Text>

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
                    <TextButton name='Skip to listings' onPress={() => navigation.navigate('App')} />
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
