import mongoose from 'mongoose';

const prenotazioneSchema = mongoose.Schema({
    idCliente:String,
    idVeicolo:String,
    idAutista:String,
    dataPartenza:Date,
    oraPartenza:String,
    dataArrivo:Date,
    oraArrivo:String,
    idParcheggioConsegna:String,
    idParcheggioRilascio:String,
    viaPartenza:String,
    viaDestinazione:String,
    statoPrenotazione:{
        type:String,
        enum:["incompleta","completa","terminata"],
        default:"incompleta"
    }
    
});

const prenotazione = mongoose.model('prenotazione', prenotazioneSchema);

export default prenotazione;