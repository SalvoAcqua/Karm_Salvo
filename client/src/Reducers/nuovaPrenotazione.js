const initialState = {
    prenotazione:{}
};

export default (state=initialState, action) => {
    switch(action.type){
        case 'SET_BOOKING':
            return {...state, prenotazione: action.payload};
        default:
            return state;
    }
}