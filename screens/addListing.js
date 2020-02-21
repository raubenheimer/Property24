import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FlatButton from '../shared/flatButton';
import { globalStyles } from '../styles/global';
import { newProperty } from '../api/api';
import { addressSplit } from '../shared/smallFunctions'


const newPropertySchema = Yup.object({
    images: Yup.string()
        .required('Please provide property image url'),
    name: Yup.string()
        .required('Please enter the property discription'),
    address: Yup.string()
        .required('Please enter the property address'),
    price: Yup.string()
        .required('Please enter the property price'),
    beds: Yup.string()
        .required('Please enter the number of bedrooms'),
    baths: Yup.string()
        .required('Please enter the number of bathrooms'),
})

//The About Screen Layout
export default function SingleListing({ navigation }) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View >
                <View style={globalStyles.appContainer}>
                    <Formik
                        initialValues={{ images: '', name: '', address: '', price: '', beds: '', baths: '' }}
                        validationSchema={newPropertySchema}
                        onSubmit={(values, actions) => {
                            var [streetNumber, street, city, postCode] = addressSplit(values.address)
                            newProperty(
                                street,
                                streetNumber,
                                values.beds,
                                values.baths,
                                values.price,
                                [values.images],
                                postCode,
                                values.name,
                                city,
                                navigation)
                            actions.resetForm();
                        }}
                    >
                        {(props) => (
                            < View>
                                <Text style={globalStyles.boldHeading}>Property Details</Text>
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

                                <Text>Address</Text>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='Eg: 4, Blue Street, Bloemfontein, 9301'
                                    placeholderTextColor='#ccc'
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

