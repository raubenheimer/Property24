import { getAllProperties } from '../../api/properties'

export const startGetAllProperties = () => {
    return (dispatch, getState) => {
        getAllProperties()
            .then((properties) => {
                dispatch({
                    type: 'GET_ALL_PROPERTIES',
                     all: properties
                })
                console.log('the state', getState())
            })
            .catch((error)=> {
                return error;
            })
    }
}