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
        // .then(user => {
        //     console.log('inside then')
        //     console.log(user)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
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
export const deleteProperty = (id, navigation) => {
   return Property.delete(id)
        // .then((res) => {
        //     console.log('Delete Then');
        //     console.log(res);
        //     navigation.navigate('Home')
        //     return res
        // }
        // )
        // .catch((res) => {
        //     console.log('Delete Catch');
        //     alert(res)
        // })
};

//create new property
export const newProperty = (street, streetNumber, beds, baths, price, images, postCode, name, city, navigation) => {
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
        // .then((res) => {
        //     console.log(res);
        //     actions.resetForm();
        //     navigation.navigate('Home')
        // }
        // )
        // .catch((res) => {
        //     console.log(res)
        //     console.log('CATCH')
        //     navigation.navigate('Home')
        // })
};

//update property
export const updateProperty = (street, streetNumber, beds, baths, price, images, postCode, name, city, navigation, id, startGetAllProperties) => {
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
        // .then((response) => {
        //     console.log('Update Then')
        //     console.log(response)
        //     navigation.navigate('Home')
        // })
        // .catch((response) => {
        //     console.log('Update Catch')
        //     console.log(response)
        //     navigation.navigate('Home')
        // })
}