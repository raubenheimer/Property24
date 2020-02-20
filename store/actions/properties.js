import { getAllProperties } from '../../api/api'

export const startGetAllProperties = () => {
    return (dispatch, getState) => {
        getAllProperties()
            .then((properties) => {
                dispatch({
                    type: 'GET_ALL_PROPERTIES',
                     all: properties
                })
            })
            .catch((error)=> {
                return error;
            })
    }
}