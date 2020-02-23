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
    return new User(
        username,
        password,
        fullname,
        email
    )
        .signup()
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
export const deleteProperty = (id) => {
   return Property.delete(id)
};

//create new property
export const newProperty = (street, streetNumber, beds, baths, price, images, postCode, name, city) => {
    return new Property(
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
};

//update property
export const updateProperty = (street, streetNumber, beds, baths, price, images, postCode, name, city, id) => {
    return new Property(
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
}