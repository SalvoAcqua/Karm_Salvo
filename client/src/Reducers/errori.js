const initialState = {error:{}};


export default (state=initialState, action) => {
    switch (action.type){
        case 'GET_ERROR':
            return {...state, error: action.payload};
        case '':
            return state;
        default:
            return state;
    }
}