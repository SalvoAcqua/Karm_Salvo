import express from 'express';
import {addPrenotazione,listaVeicoliPrenotazione} from '../Controllers/Prenotazione.js'

const router = express.Router();

router.post("/AddPrenotazione",addPrenotazione);
router.post("/ListaVeicoli",listaVeicoliPrenotazione);


export default router;