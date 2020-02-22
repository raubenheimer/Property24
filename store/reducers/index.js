import { combineReducers } from 'redux';
import properties from './properties'
import userInfo from './userReducer'

export default combineReducers({
    userInfo,
    properties
})