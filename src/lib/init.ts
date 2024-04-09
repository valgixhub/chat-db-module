import dotenv from 'dotenv'
import { Uws } from './uws.js'

export default function Init() {

    dotenv.config()

    Uws.app().listen(9001, (token) => {

        if(token) {
            console.log('Server has been started')
        }

    })

}