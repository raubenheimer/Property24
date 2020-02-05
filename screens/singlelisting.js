import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FlatButton from '../shared/flatButton';
import { globalStyles } from '../styles/global';

//The About Screen Layout
export default function SingleListing({ navigation }) {


    return (
        <View >
            <View style={globalStyles.appContainer}>
                <Formik
                    initialValues={{ name: navigation.getParam('name'), address: navigation.getParam('address'), price: navigation.getParam('price') }}
                    //validationSchema={loginSchema}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        //editListing();
                        console.log('oi')
                    }}
                >
                    {(props) => (
                        < View>
                            <Text style={globalStyles.boldHeading}>Property Details</Text>
                            <Text>Name</Text>
                            < TextInput
                                style={globalStyles.input}
                                onChangeText={props.handleChange('name')}
                                value={props.values.name}
                            />
                            <Text style={globalStyles.required}>{props.touched.name && props.errors.name}</Text>

                            <Text>Address</Text>
                            <TextInput
                                style={globalStyles.input}
                                onChangeText={props.handleChange('address')}
                                value={props.values.address}
                            />
                            <Text style={globalStyles.required}>{props.touched.address && props.errors.address}</Text>

                            <Text>Price</Text>
                            <TextInput
                                style={globalStyles.input}
                                onChangeText={props.handleChange('price')}
                                value={props.values.price}
                            />
                            <Text style={globalStyles.required}>{props.touched.price && props.errors.price}</Text>

                            <View style={styles.twoButtons}>
                                <FlatButton name='Cancel' onPress={props.handleSubmit} />
                                <FlatButton name='Submit' onPress={props.handleSubmit} />
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    twoButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
});

