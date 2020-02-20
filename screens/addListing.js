import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FlatButton from '../shared/flatButton';
import { globalStyles } from '../styles/global';
import { newProperty } from '../api/api';

//The About Screen Layout
export default function SingleListing({ navigation }) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View >
                <View style={globalStyles.appContainer}>
                    <Formik
                        initialValues={{ name: '', streetNumber: '', street: '', price: '', postCode: '', }}
                        //validationSchema={loginSchema}
                        onSubmit={(values, actions) => {
                            newProperty(
                                values.street,
                                values.streetNumber,
                                values.beds,
                                values.baths,
                                values.price,
                                null,
                                values.postCode,
                                values.name)
                            actions.resetForm();                    
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

                                <Text>Street Number</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    onChangeText={props.handleChange('streetNumber')}
                                    value={props.values.streetNumber}
                                />
                                <Text style={globalStyles.required}>{props.touched.streetNumber && props.errors.streetNumber}</Text>

                                <Text>Street</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    onChangeText={props.handleChange('street')}
                                    value={props.values.street}
                                />
                                <Text style={globalStyles.required}>{props.touched.street && props.errors.street}</Text>

                                <Text>Postal code</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    onChangeText={props.handleChange('postCode')}
                                    value={props.values.postCode}
                                />
                                <Text style={globalStyles.required}>{props.touched.postCode && props.errors.postCode}</Text>

                                <Text>Price</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    onChangeText={props.handleChange('price')}
                                    value={props.values.price}
                                />
                                <Text style={globalStyles.required}>{props.touched.price && props.errors.price}</Text>

                                <Text>Number of Bedrooms</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    onChangeText={props.handleChange('beds')}
                                    value={props.values.beds}
                                />
                                <Text style={globalStyles.required}>{props.touched.beds && props.errors.beds}</Text>

                                <Text>Number of Bathrooms</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    onChangeText={props.handleChange('baths')}
                                    value={props.values.baths}
                                />
                                <Text style={globalStyles.required}>{props.touched.baths && props.errors.baths}</Text>

                                <View style={styles.twoButtons}>
                                    <FlatButton name='Cancel' onPress={() => { console.log('cancled submit') }} />
                                    <FlatButton name='Submit' onPress={props.handleSubmit} />
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    twoButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
});

