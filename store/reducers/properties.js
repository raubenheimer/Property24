const defaultPropertiesState = {
    all: []
};

export default (state = defaultPropertiesState, action) => {
    switch (action.type){
        case'GET_ALL_PROPERTIES':
            return {
                ...state,
                all: action.all
            }
        default:
            return state
    }
} 