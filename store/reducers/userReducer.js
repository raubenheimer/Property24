const defaultUserState = {

};

export default (state = defaultUserState, action) => {
    switch (action.type){
        case'RECEIVE_USER':
            return {
                ...state,
                ...action.payload 
            }
        default:
            return state
    }
} 