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
                console.log('Signed In')
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
            console.log('inside then')
            console.log(user)
        })
        .catch(err => {
            console.log(err)
        })
};

//fetch all properties
export const getAllProperties = () => {
    return Property
        .getAll()
        .then(properties => {
            console.log('inside then')
            console.log(properties)
            return properties
        })
        .catch(err => {
            console.log(err)
            return err
        })
};

//delete property
export const deleteProperty = (propertyid) => {
    Property.delete(propertyid)
        .then(console.log('Deleted'))
        .catch(console.log('Not Deleted'))
};

//create new property
export const newProperty = (street, streetNumber, beds, baths, price, images, postCode, name, city, navigation) => {
    new Property(
        street, //street
        streetNumber, //number
        beds, //beds
        baths, //baths
        price, //price
        images, //images
        postCode, //postCode
        name, //name
        city
    )
        .save()
        .then( (res) =>{
            console.log(res);
        navigation.navigate('App')
        }
        )
        .catch (console.log('Not New'))
}

//update property
// new Property(street, number, beds, baths, price)
//     .update(id)
//     .then(console.log('Updated'))
//     .catch(console.log('Not Updated'))