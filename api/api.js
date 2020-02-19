import { User } from "zaio-property24-api/api/User";
import { Property } from "zaio-property24-api/api/Property";
import { Alert } from "react-native";

//login an existing user
export const loginUser = (username, password, navigation) => {
    new User(
        username,
        password
    )
        .login()
        .then(response => {
            if (response.message === 'welcome') {
                navigation.navigate('App');
            }
        })
        .catch(err => {
            console.log('Inside Catch')
            console.log(err)
        })
};

//create a new user
export const newUser = (username, password, fullname, email) => {
    new User(
        username,
        password,
        fullname,
        email
    )
        .signup()
        .then(user => {
            console.log(user)
        })
        .catch(err => {
            console.log(err)
        })
};

//fetch all properties
export const getAllProperties = () => {
    Property
        .getAll()
        .then(properties => {
            console.log(properties)
        })
        .catch(err => {
            console.log(err)
        })
};

//delete property
export const deleteProperty = () => {
    Property.delete(property.id)
        .then(console.log('Deleted'))
        .catch(console.log('Not Deleted'))
};

//create new property
export const newProperty = (street, streetNumber, beds, baths, price, images, postCode, name) => {
    new Property(
        street, //street
        streetNumber, //number
        beds, //beds
        baths, //baths
        price, //price
        images, //images
        postCode, //postCode
        name //name
    )
        .save()
        .then(console.log('New'))
        .catch(console.log('Not New'))
}

//update property
// new Property(street, number, beds, baths, price)
//     .update(id)
//     .then(console.log('Updated'))
//     .catch(console.log('Not Updated'))