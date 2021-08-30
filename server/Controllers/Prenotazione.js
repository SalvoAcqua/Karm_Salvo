import utente from '../Models/utente.js';
import veicolo from '../Models/veicoli.js';
import parcheggio from '../Models/parcheggi.js';
import prenotazione from '../Models/prenotazioni.js';

export const addPrenotazione = async (req,res) => {
    let Prenotazione = {};
    if(req.body.autista==''){
        Prenotazione={
            idCliente:req.body.cliente,
            idVeicolo:req.body.veicolo,
            dataPartenza:req.body.dataPartenza,
            oraPartenza:req.body.oraPartenza,
            dataArrivo:req.body.dataArrivo,
            oraArrivo:req.body.oraArrivo,
            idParcheggioConsegna:req.body.parcheggioConsegna,
            idParcheggioRilascio:req.body.parcheggioRilascio,
            viaPartenza:'',
            viaDestinazione:'',
        }
    }else{
        Prenotazione={
            idCliente:req.body.cliente,
            idVeicolo:req.body.veicolo,
            dataPartenza:req.body.dataPartenza,
            oraPartenza:req.body.oraPartenza,
            dataArrivo:req.body.dataArrivo,
            oraArrivo:req.body.oraArrivo,
            idParcheggioRilascio:req.body.parcheggioRilascio,  //Messo per fare vedere all'autista dove lasciare il veicolo
            viaPartenza:req.body.viaPartenza,
            viaDestinazione:req.body.viaDestinazione,
        }
    }
    const newPrenotazione = new prenotazione(Prenotazione);
    await newPrenotazione.save().then((prenotazione)=>{return res.status(200).json(prenotazione)})
    .catch((err)=>{return res.status(500).json(err.message)})
}

//Lista Veicoli
export const listaVeicoliPrenotazione = async (req,res) => {
   let Veicoli = [];
   await veicolo.find({tipoVeicolo:req.body.tipoVeicolo, statoVeicolo: { $ne: "Non Attivo"} }).then(async (veicoli)=>{
    let DataPartenza = new Date(req.body.dataPa);
    let DataArrivo = new Date(req.body.dataArr);    
    for (let veicolo of veicoli) {
            await prenotazione.findOne({idVeicolo: veicolo._id, $or: [{dataPartenza: { $gt: DataPartenza, $lt:DataArrivo}, dataArrivo: { $gt: DataArrivo}}, {dataPartenza: { $lt: DataPartenza}, dataArrivo: { $gt: DataArrivo}}, {dataPartenza: { $lt: DataPartenza}, dataArrivo: { $gt: DataPartenza, $lt: DataArrivo }}]}).then((controlloPrenotazioni)=>{
                
                console.log(!controlloPrenotazioni);
            }).catch((err)=>{res.status(500).json(err.message)});
        }   
   }).catch((err)=>{return res.status(500).json(err.message)});
}