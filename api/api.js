import { User } from "zaio-property24-api/api/User";
import { Property } from "zaio-property24-api/api/Property";

//login an existing user
export const loginUser = (username, password, navigation) => {
    return new User(
        username,
        password
    )
        .login()
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
            return properties
        })
        .catch(err => {
            console.log(err)
            return err
        })
};

//delete property
export const deleteProperty = (id, startGetAllProperties, navigation) => {
    Property.delete(id)
        .then((res) => {
            console.log(res);
            //startGetAllProperties()
            navigation.navigate('Home')
        }
        )
        .catch((res) => {
            alert(res)
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
            actions.resetForm();
            navigation.navigate('Home')
        }
        )
        .catch((res) => {
            console.log(res)
            console.log('CATCH')
            startGetAllProperties()
            navigation.navigate('Home')
        })
};

//update property
export const updateProperty = (street, streetNumber, beds, baths, price, images, postCode, name, city, navigation, id, startGetAllProperties) => {
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
            startGetAllProperties()
            navigation.navigate('Home')
        })
        .catch((response) => {
            console.log(response)
            navigation.navigate('Home')
        })
}