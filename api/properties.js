import api from './base';

export const getAllProperties = () => {
    return api.get('/properties')
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        return error.repsonse
    })
}