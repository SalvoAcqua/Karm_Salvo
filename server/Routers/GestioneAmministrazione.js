import express from 'express';
import {getClienti,getDipendenti,getVeicoli,addVeicolo,removeVehicle,reactivate,addParcheggio,getParcheggi,getParcheggiDisp,changePark,modificaTariffa} from "../Controllers/GestioneAmministrazione.js"

const router = express.Router();

router.get("/ListClienti",getClienti)
router.get("/ListDipendenti",getDipendenti)
router.get("/ListVeicoli",getVeicoli)
router.post("/AddVeicolo",addVeicolo)
router.post("/RimuoviVeicolo",removeVehicle)
router.post("/RiattivaVeicolo",reactivate)
router.post("/AddParcheggio",addParcheggio)
router.get("/ListParcheggi",getParcheggi)
router.post("/ListParcheggiDisponibili",getParcheggiDisp)
router.post("/ModificaParcheggio",changePark)
router.post("/ModificaTariffa",modificaTariffa)






export default router;