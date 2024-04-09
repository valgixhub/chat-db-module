import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { Uws } from '../lib/uws.js'

export default function Init() {

    dotenv.config()

    mongoose.connect(process.env.MONGO)
        .then(r => console.log(`DB v${r.version}`))

    Uws.app.ws('/*', {
        idleTimeout: 32,
        maxBackpressure: 1024,
        maxPayloadLength: 512,
        compression: Uws.dc3kb
    }).listen(parseInt(process.env.SERVER_PORT || '9001', 10), (token) => {

        if(token) { console.log(token) }

    })

}