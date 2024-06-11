import { Schema } from "mongoose"

const TimeModeSchema = new Schema({
    modeName: { type: String, required: true},
    workMinutes: { type: Number, required: true},
    workSeconds: { type: Number, required: true},
    breakMinutes: { type: Number, required: true},
    breakSeconds: { type: Number, required: true},
    displayMessage: { type: String, required: true},
})

export default model("TimeMode", TimeModeSchema);