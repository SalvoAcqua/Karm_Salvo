import { combineReducers } from 'redux';
import utenti from './utenti';
import errori from './errori';
import AccountCliente from './AccountCliente';
import AccountAdmin from './AccountAdmin';
import nuovaPrenotazione from './nuovaPrenotazione';



export default combineReducers({
    utenti,
    errori,
    AccountCliente,
    AccountAdmin,
    nuovaPrenotazione
})

