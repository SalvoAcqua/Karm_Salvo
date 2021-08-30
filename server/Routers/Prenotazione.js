import express from 'express';
import {addPrenotazione} from '../Controllers/Prenotazione.js'

const router = express.Router();

router.post("/AddPrenotazione",addPrenotazione);


export default router;