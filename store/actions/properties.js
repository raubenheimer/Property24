import { getAllProperties } from '../../api/api'

export const startGetAllProperties = () => {
    return function (dispatch) {
        getAllProperties()
            .then((properties) => {
                dispatch({
                    type: 'GET_ALL_PROPERTIES',
                    payload: properties
                })
            })
            .catch((error) => {
                return error;
            })
    }
}