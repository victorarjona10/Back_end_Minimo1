import { IConfianza, ConfianzaModel } from "../models/confianza";

export class ConfianzaService {

    async postConfianza(confianza: Partial<IConfianza>): Promise<IConfianza> {
        try {
            const newConfianza = new ConfianzaModel(confianza);
            return await newConfianza.save();
        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }

    async getConfianzaById(userId: string): Promise<IConfianza | null> {
        try {
            return await ConfianzaModel.findOne({userId: userId});
        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }

    async updateConfianza(userId: string, confianza: Partial<IConfianza>): Promise<IConfianza | null> {
        try {
            const result = await ConfianzaModel.findOneAndUpdate(
                { userId: userId }, // Este es el filtro correcto
                confianza,
                { new: true });
    
            return result as IConfianza | null; 
        } catch (error: any) {
            console.log(error);
            throw error;
        }
    }

    async deleteConfianza(userId: string): Promise<void> {
        try {
            await ConfianzaModel.findOneAndDelete({ userId: userId });
            return Promise.resolve(); 
        }
        catch (error: any) {
            console.log(error);
            throw error;
        }
    }
}