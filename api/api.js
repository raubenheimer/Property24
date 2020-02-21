import { User } from "zaio-property24-api/api/User";
import { Property } from "zaio-property24-api/api/Property";

//login an existing user
export const loginUser = (username, password, navigation) => {
    new User(
        username,
        password
    )
        .login()
        .then(response => {
            console.log(response)
            if (Object.keys(response)[0] === 'id') {
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
export const deleteProperty = (id) => {
    Property.delete(id)
    .then((res) => {
        console.log(res);
    }
    )
    .catch((res) => {
        console.log(res)
    })
};

//create new property
export const newProperty = (street, streetNumber, beds, baths, price, images, postCode, name, city, navigation) => {
    new Property(
        street,
        streetNumber,
        beds,
        baths,
        price,
        images,
        postCode,
        name,
        city
    )
        .save()
        .then((res) => {
            console.log(res);
            navigation.navigate('View Listings')
        }
        )
        .catch((res) => {
            console.log(res)
        })
};

//update property
export const updateProperty = (street, streetNumber, beds, baths, price, images, postCode, name, city, navigation, id) => {
    new Property(
        street,
        streetNumber,
        beds,
        baths,
        price,
        images,
        postCode,
        name,
        city
    )
        .update(id)
        .then((response) => {
            console.log(response)
        })
        .catch((response) => {
            console.log(response)
        })
}