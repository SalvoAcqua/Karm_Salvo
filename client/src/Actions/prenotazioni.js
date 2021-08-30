//Nuova Prenotazione
export const newBooking = (userData) => (dispatch) => {
        dispatch({type:'SET_BOOKING', payload: userData});
        window.location.href="/SceltaVeicolo"
}