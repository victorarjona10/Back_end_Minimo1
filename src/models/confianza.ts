import {ObjectId, Schema, model} from 'mongoose';

export interface IConfianza {
    _id: ObjectId;
    userId: ObjectId;
    confianza: number;
    fecha: Date;
}

const confianzaSchema = new Schema<IConfianza>({
    userId: { type: Schema.Types.ObjectId, ref: "Product",required: true},
    confianza: {type: Number, required: true},
    fecha: {type: Date, default: Date.now}
});

export const ConfianzaModel = model<IConfianza>("Confianza", confianzaSchema);