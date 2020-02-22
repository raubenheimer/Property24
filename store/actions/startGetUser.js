import { loginUser } from '../../api/api'
import receiveUser from './receiveUser'

export const startGetUser = (userName, password, navigation) => {
    console.log(password)
    return function (dispatch) {
        loginUser(userName, password)
            .then(
                user => {
                    if (Object.keys(user)[0] != 'error') {
                        console.log(user)
                        dispatch(receiveUser(user))
                        navigation.navigate('App')
                    } else {
                        alert(user.error)
                    }
                }
            )
            .catch((error) => {
                alert(error)
            })
    }
}