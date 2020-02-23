import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FlatButton from '../shared/flatButton';
import { globalStyles } from '../styles/global';
import { updateProperty, deleteProperty } from '../api/api';
import { startGetAllProperties } from '../store/actions/properties';
import { useDispatch } from 'react-redux'

const singleListingSchema = Yup.object({
    images: Yup.string()
    .required('Please provide property image url'),
name: Yup.string()
    .required('Please enter the property discription'),
streetNumber: Yup.number().integer('Must be an integer number')
    .min(0, 'Must be greater than 0')
    .required('Please enter the street number'),
street: Yup.string()
    .required('Please enter the street name'),
city: Yup.string()
    .required('Please enter the city'),
postCode: Yup.number().integer('Must be an integer number')
    .min(0, 'Must be greater than 0')
    .required('Please enter the post code'),
price: Yup.number().integer('Must be an integer number')
    .min(0, 'Must be greater than 0')
    .required('Please enter the property price'),
beds: Yup.number().integer('Must be an integer number')
    .min(0, 'Must be greater than 0')
    .required('Please enter the number of bedrooms'),
baths: Yup.number().integer('Must be an integer number')
    .min(0, 'Must be greater than 0')
    .required('Please enter the number of bathrooms'),
})


//The About Screen Layout
export default function SingleListing({ navigation }) {

    const dispatch = useDispatch();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView >
                <View style={globalStyles.appContainer}>
                    <Formik
                        initialValues={{
                            images: navigation.getParam('images')[0],
                            name: navigation.getParam('name'),
                            streetNumber: navigation.getParam('number'),
                            street: navigation.getParam('street'), 
                            city: navigation.getParam('city'), 
                            postCode: navigation.getParam('postCode'),
                            price: navigation.getParam('price').toString(),
                            beds: navigation.getParam('beds').toString(),
                            baths: navigation.getParam('baths').toString()
                        }}
                        validationSchema={singleListingSchema}
                        onSubmit={(values, actions) => {
                            updateProperty(
                                value.street,
                                value.streetNumber,
                                values.beds,
                                values.baths,
                                values.price,
                                values.images,
                                value.postCode,
                                values.name,
                                value.city,
                                navigation.getParam('_id'),
                            )
                                .then((res) => {
                                    dispatch(startGetAllProperties());
                                    actions.resetForm();
                                    navigation.navigate('Home');
                                })
                        }}
                    >
                        {(props) => (
                            < View>
                                <Text style={globalStyles.boldHeading}>Edit Property Details</Text>
                                <Text>Image Url</Text>
                                < TextInput
                                    style={globalStyles.input}
                                    onChangeText={props.handleChange('images')}
                                    value={props.values.images}
                                />
                                <Text style={globalStyles.required}>{props.touched.name && props.errors.name}</Text>

                                <Text>Property Discription</Text>
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

                                <Text>Street Name</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    onChangeText={props.handleChange('street')}
                                    value={props.values.street}
                                />
                                <Text style={globalStyles.required}>{props.touched.street && props.errors.street}</Text>

                                <Text>City</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    onChangeText={props.handleChange('city')}
                                    value={props.values.city}
                                />
                                <Text style={globalStyles.required}>{props.touched.city && props.errors.city}</Text>

                                <Text>Post Code</Text>
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
                                    <FlatButton name='Cancel' onPress={() => { navigation.navigate('Home') }} color='#406090' />
                                    <FlatButton name='Submit' onPress={props.handleSubmit} color='#406090' />
                                </View>
                                <View style={styles.deleteButton}>
                                    <FlatButton
                                        name='Delete'
                                        onPress={() => {
                                            deleteProperty(navigation.getParam('_id'))
                                                .then((res) => {
                                                    dispatch(startGetAllProperties());
                                                    navigation.navigate('Home');
                                                })
                                        }}
                                        color='red' />
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    twoButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    deleteButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 30
    },
});

