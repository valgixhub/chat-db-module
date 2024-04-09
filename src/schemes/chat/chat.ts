import { Schema, model } from 'mongoose'

const Chat = new Schema({
    t: String,
    i: String
})

export default model('Chat', Chat)