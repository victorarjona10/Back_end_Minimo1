import { Router } from "express";
import { postConfianza, getConfianzaById, getConfianzaByIdAndUpdate, getConfianzaByIdAndDelete } from "../controllers/confianza.controller";


const router = Router();

router.post("/", postConfianza);   
router.get('/:id', getConfianzaById);
router.put('/:id', getConfianzaByIdAndUpdate); 
router.delete('/:id', getConfianzaByIdAndDelete);

export default router;