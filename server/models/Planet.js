import { Schema } from "mongoose";


export const PlanetSchema = new Schema({
    name: { type: String, required: true, maxLength: 20 },
    color: { type: String, required: true, maxLength: 20 },
    atmosphere: { type: Boolean, required: true, default: false, },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
},
    { timestamps: true, toJSON: { virtuals: true } })