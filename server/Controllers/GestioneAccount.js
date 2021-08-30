import utente from '../Models/utente.js';
import bcrypt from 'bcryptjs';
import metodiPagamento from '../Models/metodiPagamento.js';

//Aggiungi Utente
export const registraUtente = async (req, res) => {
   await utente.findOne({ email: req.body.email })
    .then(async (user) => {
        if (user) {
          return res.status(400).json({ email: "Email già esistente" });
        } else {
            //Criptiamo la password
            const passwordCriptata = await bcrypt.hash(req.body.password,10);
            let Utente = {}
            switch(req.body.ruolo){
                case "Autista":
                    Utente = {
                        ruolo: req.body.ruolo,
                        nome: req.body.nome,
                        cognome: req.body.cognome,
                        sesso: req.body.sesso,
                        dataNascita: req.body.dataNascita,
                        luogoNascita: req.body.luogoNascita,
                        provinciaNascita: req.body.provinciaNascita,
                        CF: req.body.CF,
                        numeroPatente: req.body.patente.numeroPatente,
                        tipoPatente: req.body.patente.tipoPatente,
                        dataRilascioPatente: req.body.patente.dataRilascio, 
                        dataScadenzaPatente: req.body.patente.dataScadenza, 
                        enteRilascio: req.body.patente.enteRilascio,
                        email: req.body.email,
                        password: passwordCriptata,
                    }
                    break;
                case "Addetto":
                    Utente = {
                        ruolo: req.body.ruolo,
                        nome: req.body.nome,
                        cognome: req.body.cognome,
                        sesso: req.body.sesso,
                        dataNascita: req.body.dataNascita,
                        luogoNascita: req.body.luogoNascita,
                        provinciaNascita: req.body.provinciaNascita,
                        CF: req.body.CF,
                        email: req.body.email,
                        password: passwordCriptata,
                        idParcheggio: req.body.parcheggioAssociato
                    }
                    break;
                default :
                    Utente = {
                        nome: req.body.nome,
                        cognome: req.body.cognome,
                        sesso: req.body.sesso,
                        dataNascita: req.body.dataNascita,
                        luogoNascita: req.body.luogoNascita,
                        provinciaNascita: req.body.provinciaNascita,
                        CF: req.body.CF,
                        email: req.body.email,
                        password: passwordCriptata
                    }
            }
            const newUser = new utente(Utente);
            newUser.save().then((user) => res.json(user)).catch((err)=>res.status(500).json(err.message))    
        }
    })
    .catch(err => {
        return res.status(500).json(err.message);
    })
}

export const accessoUtente = async (req,res) => {
    const {email,password} = await req.body
        await utente.findOne({email}).then((user)=>{
        if(!user){
            return res.status(404).json({UserNotFound: "Utente non trovato"});
        }  else{
            bcrypt.compare(password,user.password).then((passwordCorretta)=>{
                if(!passwordCorretta){
                    return res.status(404).json({IncorretPassword: "La password non è corretta"});
                    }
                    else{
                        return res.json(user);
                    }
            }).catch((err)=>{return res.status(500).json(err.message);})
        }
    }).catch((err)=>{ return res.status(500).json(err.message);});
} 

export const nuovaPassword = async (req,res) =>{
    const nuovaPassword = await bcrypt.hash(req.body.nuovaPassword,10);
    await utente.findOneAndUpdate({email : req.body.email}, {password: nuovaPassword},{new:true}).then((user)=>{
        return res.json(user);
    }).catch((err)=> {return res.status(500).json(err.message)})
}

export const addMetodoPagamento = async (req,res) =>{
    const newMethod = new metodiPagamento ({
        emailCliente: req.body.email,
        numeroCarta: req.body.numeroCarta,
        intestatario: req.body.intestatario,
        dataScadenza: req.body.dataScadenza,
        CVV: req.body.cvv,
    });

    await newMethod.save().then((user) => res.json(user)) .catch((err) => console.log(err));   
};



export const getMetodiPagamento = async (req,res) => {
    await metodiPagamento.find({emailCliente : req.body.email}).then((pag)=>{
        return res.json(pag)
    }).catch((err)=> {return res.status(500).json(err.message)})
}

export const removeMetodoPagamento = async (req,res) =>{
   await metodiPagamento.findOneAndRemove({_id: req.body.id}).then((pag)=>{
       res.json({succes: true,pag})
   }).catch((err)=>{return res.status(500).json(err.message)})
};

export const aggiornaPatente = async (req,res) => {
    await utente.findOneAndUpdate({
        email : req.body.email}, 
        {numeroPatente: req.body.patente.numeroPatente,
         tipoPatente: req.body.patente.tipoPatente,
         dataRilascioPatente: req.body.patente.dataRilascio, 
         dataScadenzaPatente: req.body.patente.dataScadenza, 
         enteRilascio: req.body.patente.enteRilascio},
         {new:true}).then((pag)=>{
        return res.json(pag);
    }).catch((err)=> {return res.status(500).json(err.message)})
}

export const aggiornaParcheggio = async (req,res) => {
    await utente.findOneAndUpdate({_id: req.body.id},{idParcheggio: req.body.idParcheggio},{new:true}).then((user) => {
        return res.json(user);
    }).catch((err) => {return res.status(500).json(err.message)})
}