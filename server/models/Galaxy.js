import { Schema } from "mongoose";


export const GalaxySchema = new Schema({
    name: { type: String, required: true, maxLength: 30 },
    stars: { type: Number, required: true, min: 0, max: 5000 }
},
    { timestamps: true, toJSON: { virtuals: true } })