import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FlatButton from '../shared/flatButton';
import { globalStyles } from '../styles/global';
import { updateProperty, deleteProperty } from '../api/api';
import { addressSplit } from '../shared/smallFunctions';
import { startGetAllProperties } from '../store/actions/properties';
import { useDispatch } from 'react-redux'


//The About Screen Layout
export default function SingleListing({ navigation }) {

    const dispatch = useDispatch();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View >
                <View style={globalStyles.appContainer}>
                    <Formik
                        initialValues={{
                            images: navigation.getParam('images')[0],
                            name: navigation.getParam('name'),
                            address: navigation.getParam('number') + ', ' + navigation.getParam('street') + ', ' + navigation.getParam('city') + ', ' + navigation.getParam('postCode'),
                            price: navigation.getParam('price').toString(),
                            beds: navigation.getParam('beds').toString(),
                            baths: navigation.getParam('baths').toString()
                        }}
                        //validationSchema={loginSchema}
                        onSubmit={(values, actions) => {
                            var [streetNumber, street, city, postCode] = addressSplit(values.address)
                            updateProperty(
                                street,
                                streetNumber,
                                values.beds,
                                values.baths,
                                values.price,
                                values.images,
                                postCode,
                                values.name,
                                city,
                                navigation,
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
            </View>
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
        marginTop: 15
    },
});

