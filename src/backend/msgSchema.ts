import mongoose from 'mongoose'

const msg = new mongoose.Schema({
    text: String,
    user: String,
    room: String
})
export const messageSchema = mongoose.model("msg", msg)