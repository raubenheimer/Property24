import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import FlatButton from '../shared/flatButton';
import * as Yup from 'yup';
import { Formik } from 'formik';

const signupSchema = Yup.object({
    fullName: Yup.string()
        .required('Please enter your fullname'),
    email: Yup.string()
        .required('Please enter your email')
        .email('Please enter a valid email'),
    password: Yup.string()
        .required('Please enter your password'),
    ConfirmPassword: Yup.string()
        .required('Please enter your password')
})


//The About Screen Layout
export default function SignUp({ navigation }) {

    const [signup, setsignup] = useState({ fullName: '',email:'',password:'', confirmPassword:'' });

    return (
        <View style={globalStyles.authContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.pimage} source={require('../assets/p24.png')} />
            </View>

            <View>
                <Formik
                    initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
                    validationSchema={signupSchema}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        setSignup(values);

                    }}
                >
                    {(props) => (
                        < View >
                            <Text>Full Name</Text>
                            < TextInput
                                style={globalStyles.input}
                                placeholder=''
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
                                style={globalStyles.input}
                                placeholder=''
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                            />
                            <Text style={globalStyles.required}>{props.touched.password && props.errors.password}</Text>

                            <Text>Confirm Password</Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder=''
                                onChangeText={props.handleChange('ConfirmPassword')}
                                value={props.values.confirmPassword}
                            />
                            <Text style={globalStyles.required}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                            <FlatButton name='Sign Up' onPress={props.handleSubmit}/>
                        </View>
                    )}
                </Formik>
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
