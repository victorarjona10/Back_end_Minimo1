import { Request, Response } from "express";
import { IConfianza } from "../models/confianza";
import { ConfianzaService } from "../services/confianza.service";
// para las funciones de addSubjectToUser
import { ObjectId } from "mongoose";

const confianzaService = new ConfianzaService();

export async function postConfianza(req: Request, res: Response): Promise<void> {
    try {
        const confianza = req.body as IConfianza;
        const newConfianza = await confianzaService.postConfianza(confianza);
        res.status(201).json(newConfianza);
    } catch (error: any) {
        res.status(500).json({ message: "Error al crear confianza", error });
    }
}

export async function getConfianzaById(req: Request, res: Response): Promise<void> {
    try {

        const id = req.params.id;
        const confianza = await confianzaService.getConfianzaById(id);
            res.status(200).json(confianza);
    } catch (error: any) {
        res.status(500).json({ message: "Error al querer actualizar confianza", error });
    }
}

export async function getConfianzaByIdAndUpdate(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const confianza = req.body as IConfianza;
        const updatedConfianza = await confianzaService.updateConfianza(id, confianza);
        res.status(200).json(updatedConfianza);
    } catch (error: any) {
        res.status(500).json({ message: "Error al querer actualizar confianza", error });
    }
}

export async function getConfianzaByIdAndDelete(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        await confianzaService.deleteConfianza(id);
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ message: "Error al querer eliminar confianza", error });
    }
}