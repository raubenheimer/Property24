const defaultPropertiesState = {
    allProperties: []
};

export default (state = defaultPropertiesState, action) => {
    switch (action.type){
        case'GET_ALL_PROPERTIES':
            return {
                ...state,
                allProperties: action.payload
            }
        default:
            return state
    }
} 